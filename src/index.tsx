import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { combineForms } from 'react-redux-form'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxtThunk from 'redux-thunk';

import './index.css';
import App from './App';
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import { fetchRegisters } from './actions';

const initialCareState = {
    country: '',
    name: '',
    phone: '',
    email: ''
};

const store = createStore(
    combineReducers({
        rootReducer,
        register: combineForms({
            formRegister: initialCareState,
        }, 'register')
    }),
    applyMiddleware(
        ReduxtThunk
        // createLogger()
    )
);
store.dispatch(fetchRegisters() as any);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
