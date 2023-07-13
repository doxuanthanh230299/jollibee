import actionTypes from './actionTypes';

export const buyProduct = (product) => {
    return {
        type: actionTypes.BUY_PRODUCT,
        payload: product,
    };
};

export const increaseProduct = (product) => {
    return {
        type: actionTypes.INCREASE_PRODUCT,
        payload: product,
    };
};

export const decreaseProduct = (product) => {
    return {
        type: actionTypes.DECREASE_PRODUCT,
        payload: product,
    };
};

export const deleteProduct = (product) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: product,
    };
};

// export const adminLoginSuccess = (adminInfo) => ({
//     type: actionTypes.ADMIN_LOGIN_SUCCESS,
//     adminInfo: adminInfo,
// });

// export const adminLoginFail = () => ({
//     type: actionTypes.ADMIN_LOGIN_FAIL,
// });

// export const processLogout = () => ({
//     type: actionTypes.PROCESS_LOGOUT,
// });
