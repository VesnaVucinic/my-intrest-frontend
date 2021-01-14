import React, { Component } from 'react'
import { connect } from 'react-redux'
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class LoggedInNavBar extends Component {

    state = {}
  
    handleItemClick = ({ name}) => this.setState({ activeItem: name })
  
    render() {
      const { loggedIn } = this.props

      const { activeItem } = this.state
  
      return (
        <Menu>
        <Menu.Item
          as={NavLink} to="/all-boards"
          name='All Boards'
          active={activeItem === 'all-boards'}
          onClick={this.handleItemClick}
        >
          All Boards
        </Menu.Item>

        <Menu.Item
          as={NavLink} to="/boards"
          name='My Boards'
          active={activeItem === 'boards'}
          onClick={this.handleItemClick}

        >
          My Boards
        </Menu.Item>

        <Menu.Item 
          as={NavLink} to="/boards/new"
          name='New Board'
          active={activeItem === '/boards/new'}
          onClick={this.handleItemClick}

        >
          New Board
        </Menu.Item>
        <Menu.Item position="right">
           { loggedIn ? <Logout/> : null}
           </Menu.Item>
          </Menu>
       
      )
    }
}
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser,
    
  }
}
    
export default withRouter(connect(mapStateToProps)(LoggedInNavBar))
