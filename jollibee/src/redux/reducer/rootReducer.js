import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    category: categoryReducer,
});

export default rootReducer;
