import { fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga'
import axios from 'axios';
import databaseRef from '../config/firebase';

const API = 'https://us-central1-formplex.cloudfunctions.net/users';

function* startListener() {
    const channel = new eventChannel(emit => {
        const listener = databaseRef.on("value", snapshot => {
            emit({ data: snapshot.val() || {} });
        });

        return () => {
            listener.off();
        };
    });

    while (true) {
        yield take(channel);
        yield put({
            type: 'FETCH_USERS_SUCCEEDED'
        });
    }
}

function* fetchUsers() {
    try {
        yield put({
            type: 'START_FETCHING'
        });

        const res = (yield axios({
            url: API,
            method: 'get'
        })).data.users;

        const payload = yield Object.keys(res).map(key => res[key]);

        // make sure payload has id else wait for it
        const length = payload.length - 1;

        if (payload[length]['_id']) {
            yield put({
                type: 'FETCH_USERS_SUCCEEDED',
                payload
            });
        } else {
            yield put({
                type: 'FETCH_USERS_REQUESTED'
            })
        }
    } catch (e) {
        yield put({
            type: 'FETCH_USERS_FAILED'
        })
    }
}

function* createUser(data) {
    try {
        yield axios({
            url: API,
            method: 'post',
            data: data.payload
        });

        yield put({
            type: 'FETCH_USERS_REQUESTED'
        });
    } catch (e) {
        yield put({
            type: 'CREATE_USER_FAILED'
        })
    }
}

export default function* rootSaga() {
    yield fork(startListener);
    yield takeEvery("FETCH_USERS_REQUESTED", fetchUsers);
    yield takeLatest("CREATE_USER_REQUESTED", createUser);
}
