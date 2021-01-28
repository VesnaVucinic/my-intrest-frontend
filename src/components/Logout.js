import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import { withRouter } from 'react-router-dom'
import { Button }  from 'semantic-ui-react'

const Logout = ({ logout, history }) => {

  return (
    <form onSubmit={(event) =>{
      event.preventDefault()
        logout()
        history.push('/')
      }
    }>
      <Button primary size='tiny' type="submit" >Log Out</Button>
    </form>
    
  )
}

export default withRouter(connect(null, { logout } )(Logout))

