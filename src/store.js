import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import currentUser from './reducers/currentUser'
import thunk from 'redux-thunk'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import myBoards from './reducers/myBoards'
import boardForm from './reducers/boardForm'
import allBoards from './reducers/allBoards'

const reducer = combineReducers({
    currentUser,
    loginForm,
    signupForm,
    myBoards, 
    boardForm,
    allBoards
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store