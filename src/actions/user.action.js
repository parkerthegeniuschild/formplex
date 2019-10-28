export const fetchUsers = () => ({
  type: 'FETCH_USERS_REQUESTED',
});

export const addUser = payload => ({
    type: 'CREATE_USER_REQUESTED',
    payload,
});
