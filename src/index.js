import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react';
import logger from 'redux-logger';

const feedback = (state={}, aciton) => {
    return state
}

const store = createStore(
    combineReducers({feedback}),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
