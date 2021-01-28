import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
    
    const { name, email, password } = signupFormData
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
        signup(signupFormData)
        history.push('/')
    }

  
    return (
        <Grid textAlign='center' style={{ height: '100vh', marginTop: '20px'  }}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              Sign-up to create your account
          </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' name = "name" placeholder='Name' type="text" value={name} onChange={handleInputChange} />
                <Form.Input fluid icon='user' iconPosition='left' name = "email" placeholder='E-mail address' type="email" value={email}  onChange={handleInputChange} />
                <Form.Input fluid icon='lock' iconPosition='left' name = "password" placeholder='Password' type='password' value={password} onChange={handleInputChange} />
    
                <Button color='blue' fluid size='large' onClick={handleSubmit}>
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have account? <Button size='mini' basic  as={Link} to='login'>Log In</Button>
            </Message>
          </Grid.Column>
        </Grid>
      )

    
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
  }

export default withRouter(connect(mapStateToProps, { updateSignupForm,  signup } )(Signup))
