import actionTypes from './actionTypes';

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS,
});

export const userLoginSuccess = ({ email, password, id }) => {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        userInfo: { email, password, id },
    };
};

export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL,
});

export const PROCESS_LOGOUT = () => ({
    type: actionTypes.PROCESS_LOGOUT,
});
