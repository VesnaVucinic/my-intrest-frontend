import React from 'react';
import { updateNewBoardForm } from "../actions/newBoardForm.js"
import { connect } from 'react-redux'

const NewBoardForm = ({ name, history }) => {
   const handleChange= event =>{
       const { name,value } = event.target
       updateNewBoardForm(name, value)
   }

    const handleSubmit = event => event.preventDefault()
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                placeholder="name"
                onChange={handleChange}
                value={name}
            />
            <input 
                type="submit" 
                value="Create Board"
            />
        </form>
    )
    };
const mapStateToProps = state => {
    const { name } = state.newBoardForm
    return {
        name
        // formData: state.newBoardForm
    }
}

export default connect(mapStateToProps, { updateNewBoardForm })(NewBoardForm);