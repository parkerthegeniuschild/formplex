const initialState = {
    users: [],
    is_created: false
};

// helper function to add new user to list of users
const addNewUser = (allUsers, newUser) => {
    allUsers.push(newUser);
    return allUsers;
};

const userReducer = (currentState = initialState, action) => {
    switch (action.type) {
        case 'LIST_ALL_USERS': {
            return {
                ...currentState,
            };
        }
        case 'ADD_NEW_USER': {
            const { users } = currentState;
            const { payload: newUser } = action;
            return {
                ...currentState,
                is_created: true,
                users: addNewUser(users, newUser),
            };
        }
        default:
            return currentState;
    }
};

export default userReducer;
