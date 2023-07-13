import actionTypes from '../action/actionTypes';

const initialState = {
    categoryId: 7,
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_CATEGORY: {
            return { ...state, categoryId: action.payload };
        }
        default:
            return state;
    }
};

export default categoryReducer;
