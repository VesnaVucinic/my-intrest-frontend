// import React from 'react'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import {Link} from 'react-router-dom'
// import MyBoards from './MyBoards'
// import MainContainer from './MainContainer'

// const NotLoggedInNavBar = () => {
//   return (
    
//       <div>
//         <Navbar bg="light" variant="light">
//         <Navbar.Collapse className="justify-content-end">
//           <Nav> 
//             {/* <Nav.Link as={Link}   to="/"></Nav.Link> */}
//             <Nav.Link as={Link}   to="/signup">Sign up</Nav.Link>
//             <Nav.Link as={Link}   to="/login">Log in</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//         </Navbar>
//         {/* <h2>Welcome please sign up or log in </h2> */}
//       </div>
//   )

// }

// export default NotLoggedInNavBar



import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={NavLink} to="/login"
          name='Log In'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        >
          Log In
        </Menu.Item>

        <Menu.Item
          as={NavLink} to="/signup"
          name='Sign Up'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
        >
          Sign Up
        </Menu.Item>
      </Menu>
    )
  }
}