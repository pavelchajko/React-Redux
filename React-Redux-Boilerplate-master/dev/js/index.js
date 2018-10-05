import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from './reducers'
import {Provider} from 'react-redux';
import App from './components/App'

//note that allReducers is the reducers package we created in reducers/index.js
const store = createStore(allReducers);

//in this way the provider takes the store and makes it avaiable to all components
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
