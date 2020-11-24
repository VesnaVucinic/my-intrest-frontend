import React from 'react'
import {connect} from 'react-redux';
import {loginUserFetch} from '../thunks/fetchUser'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const initialState = {
    email:"",
    password: "",
    emailError: "",
    passwordError: ""
}

class LoginForm extends React.Component{
    
    state = initialState


    handleChange = (e) =>{
       this.setState({
          [e.target.name]: e.target.value 
       })
    }

    validate = () =>{
        // let passwordError=""
        let isValid = true
        let passwordError = ""
        let emailError = ""
       
        if ((!this.state.email)||(!this.state.email.includes("@"))){
             emailError = "Invalid email"
        }
        
        if(!this.state.password){
            passwordError = "You have to enter password to log in"
        }
        
        if (emailError||passwordError){
            this.setState({emailError,passwordError})
            isValid = false
        }

        return isValid
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.validate()){
        this.props.loginUserFetch(this.state)
        this.setState(initialState)}
      }

      authenticateUser = (j)=>{
          if (j.status==="error" ){
             alert(j.message)
          }else{
              this.props.loginUserFetch(j)
          }
      }


    render(){
        return (        
            <Form className="container" onSubmit={this.handleSubmit} >
                <h1>Login Form</h1>
                <Form.Group controlId="formUserName">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                       name = "email"
                       onChange={this.handleChange} 
                       type="email" 
                       value={this.state.email}/>
                </Form.Group>
               
               {this.state.emailError ? <div className="error">{this.state.emailError}</div>: null}
                <Form.Group controlId="formUserName">
                     <Form.Label>Password</Form.Label>
                     <Form.Control 
                        name = "password"
                        onChange={this.handleChange} 
                        type="password" 
                        value={this.state.password}/>
                </Form.Group>
                {this.state.passwordError ? <div className="error">{this.state.passwordError}</div>: null}

                <Button variant="primary" type="submit">Log in</Button>
            </Form>
        )
      
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
      loginUserFetch: (userInfo) => dispatch(loginUserFetch(userInfo))
    }
  }

export default connect(null, mapDispatchToProps)(LoginForm)





