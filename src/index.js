import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbacks = (state=[], action) => {
    switch (action.type) {
        case 'ADD_FEEDBACK':
            return [...state, action.payload];
        default:
            return state;
    }
}

const currentFeedback = (state={}, action) => {
    switch (action.type) {
        case 'ADD_FEELINGS':
            return {...state, feelings:action.payload};
        case 'ADD_UNDERSTANDING':
            return {...state, understanding:action.payload};
        case 'ADD_SUPPORT':
            return {...state, support:action.payload};
        case 'ADD_COMMENTS':
            return {...state, comments:action.payload};
        case 'RESET_STATE':
            return state = {};
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({feedbacks, currentFeedback}),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>

    </React.StrictMode>
);
