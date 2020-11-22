import React from 'react'
import './App.css';
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from 'react-redux';

class App extends React.Component {
  // whenever component mount I am sending request to check is someone is logged in
  componentDidMount() {
    console.log("hello")
    this.props.getCurrentUser()
  }

  render() {
    return (
     this.props.currentUser ? <Logout/> : <Login/>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
