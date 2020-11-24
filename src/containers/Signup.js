import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../thunks/fetchUser'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const initialState = {
  name: "",
  email:"",
  password: "",
  emailError: "",
  passwordError: "",
  nameError: ""
}

class Signup extends React.Component{
    
    state = initialState
    
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      validate = () =>{
        // let passwordError=""
        let isValid = true
        let passwordError = ""
        let emailError = ""
        let nameError = ""
       
        if ((!this.state.email)||(!this.state.email.includes("@"))){
          emailError = "Invalid email"
     }
        
        if(!this.state.password){
            passwordError = "Password can't be empty."
        }
        

        if(!this.state.name){
          nameError = "Name can't be empty."
      }

        if (emailError||passwordError||nameError){
            this.setState({emailError,passwordError,nameError})
            isValid = false
        }

        return isValid
    }
    

      handleSubmit = event => {
        event.preventDefault();
        if(this.validate()){
        this.props.createUser(this.state)
        this.setState({
            email:"",
            password: "",
            name:""
        })}
      }



    render(){
        return (        
               <Form className="container" onSubmit = {this.handleSubmit}>
                 <h1>Sign Up</h1>

                 <Form.Group controlId="formUserName">
                   <Form.Label>Name </Form.Label>
                   <Form.Control 
                      name = "name"
                      type="text" 
                      onChange={this.handleChange} 
                      value={this.state.name}/>
                  </Form.Group>
                  {this.state.nameError ? <div className="error">{this.state.nameError}</div>: null}

                  <Form.Group controlId="formEmail">
                   <Form.Label>Email address </Form.Label>
                   <Form.Control 
                      name = "email"
                      type="text" 
                      onChange={this.handleChange} 
                      value={this.state.email}/>
                  </Form.Group>
                  {this.state.emailError ? <div className="error">{this.state.emailError}</div>: null}

                  <Form.Group controlId="formPassword">
                  <Form.Label>Password: </Form.Label>
                   <Form.Control 
                      name = "password"
                      type="password" 
                      onChange={this.handleChange} 
                      value={this.state.password}/>
                  </Form.Group>
                  {this.state.passwordError ? <div className="error">{this.state.passwordError}</div>: null}

                <Button variant="primary" type="submit">Sign up</Button>
                </Form>
        )
      
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
      createUser: (userInfo) => dispatch(createUser(userInfo))
    }
  }

export default connect(null, mapDispatchToProps)(Signup)

    
