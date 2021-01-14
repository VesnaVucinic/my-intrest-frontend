import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
      <Grid textAlign='center' style={{ height: '100vh', marginTop: '35px' }} >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
            Log-in to your account
        </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' name = "email" placeholder='E-mail address' type="email" onChange={handleInputChange} />
              <Form.Input fluid icon='lock' iconPosition='left' name = "password" placeholder='Password' type='password' onChange={handleInputChange} />
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
        loginFormData: state.loginForm,
        boards: state.myBoards
    }
}
//   imported action creator updateLoginForm I passed as an object in connect as a second argument
// I get availability to this updateLoginForm object within component as a props and I can use it as a callbeck for onChange
// and I access it directly becouse it's already destructured
export default connect(mapStateToProps, { updateLoginForm, login })(Login)
