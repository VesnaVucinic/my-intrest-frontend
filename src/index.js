import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import userReducer from './reducers/userReducer'
import loadingReducer from './reducers/loadingReducer';



const rootReducer = combineReducers({
    user: userReducer,
    loading: loadingReducer,
  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root')
);


