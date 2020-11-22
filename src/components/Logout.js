import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"


const Logout = ({ logout }) => {
  return (
    <form onSubmit={ logout }>
      <input type="submit" value="Log Out"/>
    </form>
  )
}

export default connect(null, { logout } )(Logout)

// I still need....

// 1. action (creator)
    // 2 action creaators for asynchronous actions where first one will fire on action
    // and second one going to do something when we get a response
// 2. another case statement in my currentUser reducer