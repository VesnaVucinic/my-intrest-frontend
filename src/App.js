import React from 'react'
import './App.css';
import Login from './components/Login.js'
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
      <Login/>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
