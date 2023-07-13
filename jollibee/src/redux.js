// import { logger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './redux/reducer/rootReducer';

export const history = createBrowserHistory({ basename: process.env.REACT_APP_ROUTER_BASE_NAME });

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const dispatch = store.dispatch;

export const persistor = persistStore(store);

export default store;
