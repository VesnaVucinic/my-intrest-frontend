import React from 'react'
import './App.css';
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from 'react-redux';
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Logout from './components/Logout.js'
import Home from './components/Home.js'
import MainContainer from './components/MainContainer.js';
import { Route, Switch, withRouter  } from 'react-router-dom'

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
         <NavBar/>
        <Switch>
            <Route exact path='/' render={(props) => loggedIn ? <MainContainer {...props}/> : <Home {...props}/>}/>
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