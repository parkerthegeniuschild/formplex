import { fork, put, takeLatest, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga'
import axios from 'axios';
import firebase from "../config/firebase";

const API = 'https://us-central1-formplex.cloudfunctions.net/users';

function* startListener() {

    const channel = new eventChannel(emitter => {
        const listener = firebase.on("value", snapshot => {
            emitter({
                data: snapshot.val() || {}
            });
        });

        return () => {
            listener.off();
        };
    });

    while (true) {

        const {data} = yield take(channel);

        try {
            // display the spinner until work is done
            yield put({
                type: 'START_LOADING'
            });

            const payload = yield Object.keys(data).map(key => data[key]);

            // make sure payload has id else wait for it
            const length = payload.length - 1;

            if (payload[length]['_id']) {
                yield put({
                    type: 'FETCH_USERS_SUCCEEDED',
                    payload
                });
            } else {
                // stop the spinner
                yield put({
                    type: 'STOP_LOADING'
                });
            }
        } catch (e) {
            yield put({
                type: 'FETCH_USERS_FAILED'
             });
        }
    }
}

function* createUser(data) {
    try {
        yield axios({
            url: API,
            method: 'post',
            data: data.payload
        });
    } catch (e) {
        yield put({
            type: 'CREATE_USER_FAILED'
        });

        // stop the spinner
        yield put({
            type: 'FINISH_LOADING'
        });
    }
}

export default function* rootSaga() {
    yield fork(startListener);
    yield takeLatest("CREATE_USER_REQUESTED", createUser);
}
