import React from 'react'
import './App.css';
import { getCurrentUser } from "./actions/currentUser"
import { connect } from 'react-redux';
import NavBar from './components/NavBar'
import LoggedInNavBar from './components/LoggedInNavBar'
import NotLoggedInNavBar from './components/NotLoggedInNavBar'
import Header from './components/Header'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyBoards from './components/MyBoards.js'
import NewBoardForm from './components/NewBoardForm'
import Home from './components/Home'

import { Route, Switch, withRouter, Link } from 'react-router-dom'


import MainContainer from './components/MainContainer';
import Logout from './components/Logout';


class App extends React.Component {
  // whenever component mount I am sending request to check is someone is logged in
  componentDidMount() {
    console.log("hello")
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        {/* { loggedIn ? <NavBar/> : <Home/> } */}
        {loggedIn ? <LoggedInNavBar/> : <NotLoggedInNavBar/>}
        {/* <Header /> */}
        <Switch>
          <Route exact path='/signup' render={()=><Signup/>}/>
          <Route exact path='/login' component={Login}/>
          {/* <Route exact path='/' render={() => loggedIn ? <MyBoards/> : <Home/>}/> */}
          <Route exact path='/boards' component={MyBoards}/>
          <Route exact path='/boards/new' component={NewBoardForm}/>
        </Switch>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    allBoards: state.allBoards
    // loogdIn is boolean version of state.currentUser, I dont need whole object currentUser but only to know in app is someone logged in. Can be only currentUser in return
    // I am manipulating Redux state and getting only what I need which is weather is someone logged in or not 
  })
}

// export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
// export default connect(mapStateToProps, { getCurrentUser })(App);
export default connect(mapStateToProps, { getCurrentUser })(App);