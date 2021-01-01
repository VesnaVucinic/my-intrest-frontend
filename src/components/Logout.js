import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'



// I am using importing logout which is action creator;
// I am using mapsDispetchToProps object which givs mi props that  which I am destructuring and using as a call back
const Logout = ({ logout, history }) => {
  // console.log(history);

  // logot is passed as props as result of connect it's used 
  // shorthend mapDispatchToProps so props.logout I grabed by 
  // destructuring the incoming argument { logout } and that is what 
  // I am passing as callbeck to on Submit and when I click the button-form,
  //  whwn I submit this action creator gets dispatched by redux becuose 
  // I have thunk which returns the function in const logut return desatch =>   in file actions/currentUser.js
  //  clear the currentUser and return fetch request which tell the backend clear session/token for me 
  return (
    <form onSubmit={(event) =>{
      event.preventDefault()
        logout()
        history.push('/')
      }
    }>
      <Button type="submit" variant="light" className="justify-content-end" size="sm" >Log Out</Button>
      {/* <input type="submit" value="Log Out"/> */}

    </form>
    
  )
}

// when I connet I don't need the state I need only action that it' all this button { logout } does
export default withRouter(connect(null, { logout } )(Logout))

// I still need....

// 1. action (creator)
    // 2 action creaators for asynchronous actions where first one will fire on action
    // and second one going to do something when we get a response
// 2. another case statement in my currentUser reducer



  // <Container>
  //   <Button size='small' onClick = { logout }>Log Out</Button>
  // </Container>

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