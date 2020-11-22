import React from 'react'
import './App.css';
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from 'react-redux';
import NavBar from './components/NavBar.js'

class App extends React.Component {
  // whenever component mount I am sending request to check is someone is logged in
  componentDidMount() {
    console.log("hello")
    this.props.getCurrentUser()
  }

  render() {
    return (
     
     <NavBar/>
    //  <MainContainer/>
    );
  }
}



export default connect(null, { getCurrentUser })(App);
