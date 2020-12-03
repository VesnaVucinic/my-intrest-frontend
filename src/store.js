import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser'
import thunk from 'redux-thunk'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import myBoards from './reducers/myBoards'

// just displaying different syntax options here (lines 8 and 9)
const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    loginForm,
    signupForm,
    myBoards

})

// createStore takes as arguments reducer and redux dev tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store