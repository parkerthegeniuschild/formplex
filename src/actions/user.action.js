export const listAllUsers = () => ({
    type: 'LIST_ALL_USERS',
});

export const addNewUser = payload => ({
    type: 'ADD_NEW_USER',
    payload,
});
