import actionTypes from './actionTypes';

export const selectCategory = (categoryId) => {
    return {
        type: actionTypes.SELECT_CATEGORY,
        payload: categoryId,
    };
};
