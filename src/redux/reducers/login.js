import * as actionTypes from '../types';

const loginUser = (state = '', action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:{
            const token = state.concat(action.payload);
            localStorage.setItem('TOKEN', token);
            return token;
        }
        default:
            return state
    }
}

export default loginUser;