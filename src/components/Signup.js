import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"

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
        <form onSubmit={handleSubmit}>
          <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleInputChange} />
          <input placeholder="email" value={signupFormData.email} name="email" type="text" onChange={handleInputChange} />
          <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleInputChange} />
          <input type="submit" value="Sign Up"/>
        </form>
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
        signupFormData: state.signupForm
    }
  }
//   imported action creator updatesignupForm I passed as an object in connect as a second argument
// I get availability to this updatesignupForm object within component as a props and I can use it as a callbeck for onChange
// and I access it directly becouse it's already destructured
export default connect(mapStateToProps, { updateSignupForm,  signup } )(Signup)
