import React, { Component } from 'react'
import { connect } from 'react-redux'
import Logout from './Logout.js'
import Navbar from 'react-bootstrap/Navbar'
// import { Menu, Container } from 'semantic-ui-react'
// import { NavLink, withRouter } from 'react-router-dom'


const LoggedInNavBar = ({ currentUser }) => {
  return (
    <Navbar  bg="light" variant="light"> 
        <Navbar.Collapse className="justify-content-center">    
            <Navbar.Text >
                { currentUser ? <strong> Welcome, {currentUser.attributes.name}</strong> : "" }  
            </Navbar.Text>
        </Navbar.Collapse>       
            { currentUser ? <Logout/> : "" } 
    </Navbar>
  )
}

// I an do this because I know the incoming argument is an object, state, coming from redux
// and I know it has a property called currentUser
// state = { ...,
//   currentUser: {...}
// }

// const LoggedInNavBar = ({ currentUser }) => {
//     return (
//             <Container>
//                 {/* { currentUser ? <strong> Welcome, {currentUser.attributes.name}</strong> : "" } */}
//                 { currentUser ? <Logout/> : "" }
//             </Container>
//     )
// }

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
}

export default connect(mapStateToProps)(LoggedInNavBar)

// class LoggedInNavBar extends Component {
//     state = {}
  
//     handleItemClick = (e, { name, currentUser }) => this.setState({ activeItem: name, user: currentUser })
  
//     render() {
//       const { activeItem } = this.state
  
//       return (
//         <Menu>
//           <Menu.Item
//             as={NavLink} to="/logout"
//             name='Log Out'
//             active={activeItem === 'logout'}
//             onClick={this.handleItemClick}
//           >
//             Log out
//           </Menu.Item>
//         </Menu>
//       )
//     }
// }
//     const mapStateToProps = ({ currentUser }) => {
//         return {
//           currentUser
//         }
//     }
    
// export default connect(mapStateToProps)(LoggedInNavBar)