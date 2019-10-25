const initialState = {
    users: [],
    dataLoading: null
};

const userReducer = (currentState = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_FAILED': {
            return {
                ...currentState,
                dataLoading: false
            };
        }
        case 'FETCH_USERS_SUCCEEDED': {
            const { payload: newUser } = action;
            return {
                ...currentState,
                users: [...newUser],
                dataLoading: false
            };
        }
        case 'CREATE_USER_FAILED': {
            return {
                ...currentState,
            };
        }
        case 'START_FETCHING': {
            return {
                ...currentState,
                dataLoading: true,
            }
        }
        case 'FINISH_FETCHING': {
            return {
                ...currentState,
                dataLoading: false
            }
        }
        default:
            return currentState;
    }
};

export default userReducer;
