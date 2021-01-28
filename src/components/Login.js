import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {
    
  const{ email, password } = loginFormData

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
      <Grid textAlign='center' style={{ height: '100vh', marginTop: '35px' }} >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
            Log-in to your account
        </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' name = "email" placeholder='E-mail address' type="email"  value={email} onChange={handleInputChange} />
              <Form.Input fluid icon='lock' iconPosition='left' name = "password" placeholder='Password' type='password' value={password} onChange={handleInputChange} />
              <Button color='blue' fluid size='large' onClick={handleSubmit}>
                Login
            </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Button size='mini' basic as={Link} to='signup'>Sign Up</Button>
          </Message>
        </Grid.Column>
      </Grid>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm,
        boards: state.myBoards
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
