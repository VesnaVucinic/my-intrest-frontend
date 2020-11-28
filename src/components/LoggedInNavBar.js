import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout.js'
import Navbar from 'react-bootstrap/Navbar'

const LoggedInNavBar = ({ currentUser }) => {
  return (
    <Navbar bg={"dark"}> 
    <div className="container">
      { currentUser ? <strong> Welcome, {currentUser.attributes.name}</strong> : "" }
      { currentUser ? <Logout/> : "" }
    </div>
    </Navbar>
    
  )
}

// I an do this because I know the incoming argument is an object, state, coming from redux
// and I know it has a property called currentUser
// state = { ...,
//   currentUser: {...}
// }

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
}

export default connect(mapStateToProps)(LoggedInNavBar)