import React from 'react'
import './App.css';
import { getCurrentUser } from "./actions/currentUser"
import { connect } from 'react-redux';
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import Home from './components/Home'
import MainContainer from './components/MainContainer';
import { Route, Switch, withRouter  } from 'react-router-dom'
import NotLoggedInNavBar from './components/NotLoggedInNavBar';
import LoggedInNavBar from './components/LoggedInNavBar'

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
         {loggedIn ? <LoggedInNavBar/> : <NotLoggedInNavBar/>}
        <Switch>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/logout' component={Logout}/>
        </Switch>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
    // loogdIn is boolean version of state.currentUser, I dont need whole object currentUser but only to know in app is someone logged in. Can be only currentUser in return
    // I am manipulating Redux state and getting only what I need which is weather is someone logged in or not 
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
// export default connect(mapStateToProps, { getCurrentUser })(App);