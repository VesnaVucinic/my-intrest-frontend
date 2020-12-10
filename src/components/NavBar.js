import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

import { withRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

// withRouter is just function that will unject router props into component

// const NavBar = ({ currentUser }) => {
//   return (
//     <div className="nav">
//       { currentUser ? <strong> Welcome, {currentUser.attributes.name}</strong> : "" }
//       { currentUser ? <Logout/> : "" }
    
//     </div>
//   )
// }

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <Navbar bg="light" variant="light">
      
        
        <Nav>
        <Navbar.Collapse className="justify-content-center">    
            <Navbar.Text >
                { currentUser ? <strong> Welcome, {currentUser.attributes.name}</strong> : "" }  
            </Navbar.Text>
        </Navbar.Collapse>  
            {/* { currentUser ? <strong> Welcome, {currentUser.attributes.name}</strong> : "" } */}
            {/* { currentUser ? <Logout/> : <Login/>} */}

          <Navbar.Collapse className="justify-content-end">
            <NavLink exact activeclass="true" to="/boards">Boards  |</NavLink>
            <NavLink exact activeclass="true" to="/boards/new">New Board  |</NavLink>
            { loggedIn ? <Logout/> : null}

         
      </Navbar.Collapse>
      </Nav>
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
      currentUser,
      loggedIn: !!currentUser
    }
}

export default withRouter(connect(mapStateToProps)(NavBar))



