import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {
    // instead ({email, password}) can be (props) but in that case is value={props.email} value={props.password}
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
          ...loginFormData,
          [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }

    return (        
      <Form className="container" onSubmit={handleSubmit} >
          <h1>Log In Form</h1>
          <Form.Group controlId="formUserName">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                 name = "email"
                 onChange={handleInputChange} 
                 type="email" 
                 value={loginFormData.email}/>
          </Form.Group>
         
          <Form.Group controlId="formUserName">
               <Form.Label>Password</Form.Label>
               <Form.Control 
                  name = "password"
                  onChange={handleInputChange} 
                  type="password" 
                  value={loginFormData.password}/>
          </Form.Group>

          <Button variant="primary" type="submit">Log in</Button>
      </Form>
  )
}

// this gets the state from the store and allowes me to use as a props gives us access to this chunk of state as a props
// props get passed into functional component as an argument and thet will come as an object
// becouse is an object I can destructure it
// this gives me an argument coming to this component that looks like this:
// {
//   email: "vesna@vesna.com",
//   password: "vv"
// }
const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}
//   imported action creator updateLoginForm I passed as an object in connect as a second argument
// I get availability to this updateLoginForm object within component as a props and I can use it as a callbeck for onChange
// and I access it directly becouse it's already destructured
export default connect(mapStateToProps, { updateLoginForm, login })(Login)
