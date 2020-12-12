import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser'
import thunk from 'redux-thunk'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import myBoards from './reducers/myBoards'
import newBoardForm from './reducers/newBoardForm'
import allBoards from './reducers/allBoards'


// just displaying different syntax options here (lines 8 and 9)
const reducer = combineReducers({
    // users: usersReducer,
    // currentUser: currentUser, shorthande is just currentUser,
    //  first currentUser is key and is what I want property to called in Redux, the second currentUser is value and yhat is reducer
    // that is responsable for that one peace of state
    currentUser,
    loginForm,
    signupForm,
    myBoards, 
    newBoardForm,
    allBoards
})

// createStore takes as arguments reducer and redux dev tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store