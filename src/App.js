import React from 'react'
import './App.css';
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from 'react-redux';
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Logout from './components/Logout.js'
import MainContainer from './components/MainContainer.js';
import { Route } from 'react-router-dom'

class App extends React.Component {
  // whenever component mount I am sending request to check is someone is logged in
  componentDidMount() {
    console.log("hello")
    this.props.getCurrentUser()
  }

  render() {
    return (
   
     <div className="App">
      <Logout/>
      <NavBar/>
      {/* <MainContainer/> */} 
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          {/* <Route exact path='/logout' component={Logout}/> */}
     </div>
     
    );
  }
}



export default connect(null, { getCurrentUser })(App);