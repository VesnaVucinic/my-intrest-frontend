import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header, Message, Segment, Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
    // console.log(history);
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
                <Form.Input fluid icon='user' iconPosition='left' name = "name" placeholder='Name' type="name" onChange={handleInputChange} />
                <Form.Input fluid icon='user' iconPosition='left' name = "email" placeholder='E-mail address' type="email" onChange={handleInputChange} />
                <Form.Input fluid icon='lock' iconPosition='left' name = "password" placeholder='Password' type='password' onChange={handleInputChange} />
    
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
