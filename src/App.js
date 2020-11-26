import React from 'react'
import './App.css';
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from 'react-redux';
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js';

class App extends React.Component {
  // whenever component mount I am sending request to check is someone is logged in
  componentDidMount() {
    console.log("hello")
    this.props.getCurrentUser()
  }

  render() {
    return (
     <div className="App">
      <NavBar/>
      <MainContainer/>
     </div>
    );
  }
}



export default connect(null, { getCurrentUser })(App);