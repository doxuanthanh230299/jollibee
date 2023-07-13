import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '~/redux';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <CookiesProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </CookiesProvider>
    </GlobalStyles>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
