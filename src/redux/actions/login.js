import * as actionTypes from '../types';

const loginUser = (token) => ({
    type: actionTypes.LOGIN_USER,
    payload: token
})

export { loginUser }