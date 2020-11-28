import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
    // instead ({email, password}) can be (props) but in that case is value={props.email} value={props.password}
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
          ...signupFormData,
          [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData, history)
    }

    return (        
        <Form className="container" onSubmit={handleSubmit} >
            <h1>Sign Up Form</h1>
            <Form.Group controlId="formUserName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                   name = "name"
                   onChange={handleInputChange} 
                   type="name" 
                   value={signupFormData.name}/>
            </Form.Group>
            <Form.Group controlId="formUserName">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                   name = "email"
                   onChange={handleInputChange} 
                   type="email" 
                   value={signupFormData.email}/>
            </Form.Group>
            <Form.Group controlId="formUserName">
                 <Form.Label>Password</Form.Label>
                 <Form.Control 
                    name = "password"
                    onChange={handleInputChange} 
                    type="password" 
                    value={signupFormData.password}/>
            </Form.Group>
            <Button variant="primary" type="submit">Sign Up</Button>
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
  }

export default connect(mapStateToProps, { updateSignupForm,  signup } )(Signup)
