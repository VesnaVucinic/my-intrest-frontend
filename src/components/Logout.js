import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import Button from 'react-bootstrap/Button'


const Logout = ({ logout }) => {
  return (
    <Button variant="light" className="justify-content-end" size="sm" onClick = { logout }>Log Out</Button>
    // <Container>
    //   <Button size='small' onClick = { logout }>Log Out</Button>
    // </Container>
    )
}


// import { Menu, Container } from 'semantic-ui-react'
// import { NavLink, withRouter } from 'react-router-dom'
// import { Button } from 'semantic-ui-react'

// const Logout = ({ logout }) => {
//   return (
//     // <Button size="sm" onClick = { logout }>Log Out</Button>
//     <Menu.Item
//             as={NavLink} to="/logout"
//             name='Log Out'
//             active={activeItem === 'logout'}
//             onClick={ logout }
//     />
//   )
// }

export default connect(null, { logout } )(Logout)

// I still need....

// 1. action (creator)
    // 2 action creaators for asynchronous actions where first one will fire on action
    // and second one going to do something when we get a response
// 2. another case statement in my currentUser reducer