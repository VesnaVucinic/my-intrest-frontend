import React from 'react';
// 1. We first grabthe action creator 
import { updateNewBoardForm } from "../actions/newBoardForm.js"
import { createBoard } from  '../actions/myBoards'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'

// 3. This means redux gives us back a prop called updateBoardForm 
//  which when invocked, actually Redux will now dispatch 
const NewBoardForm = ({ formData, history, updateNewBoardForm, createBoard, userId }) => {
   
   const{ name, imageUrl } = formData

    const handleChange= event =>{
    console.log("trigger Handle change")
       const { name,value } = event.target
    // 4. this is not an invocation of just the action creator,
    // it's now Redux dispatching the action  built by the actions
    // creator with apropriate arguments 
       updateNewBoardForm(name, value)
       
   }

    const handleSubmit = event => {
        event.preventDefault()
        createBoard({
            ...formData,
            userId
        })

        // formData: {
        //     name: ""
        //     imageUrl: ""
        // }

    }
    return (
        <Container >
            <div className="NewBoardForm">
            <form onSubmit={handleSubmit}>
             {/* event.preventDefault() */}
                <input
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                    value={name}
                /><br/>
                <input
                    name="imageUrl"
                    placeholder="imageUrl"
                    onChange={handleChange}
                    value={imageUrl}
                /><br/>
                <input 
                    type="submit" 
                    value="Create Board"
                />
            </form>
            </div>
            </Container>    
    )   
    };
const mapStateToProps = state => {
    // const { name, imageUrl } = state.newBoardForm
    // const userId = state.currentUser ? state.currentUser.id : ""
    return {
        // name,
        // imageUrl
        formData: state.newBoardForm,
        userId: state.currentUser ? state.currentUser.id : ""
    }
}
// 2. We pass the action creator to redux's connect function
// using eather mapDespatchToProps or the shorthand object syntax seen below
export default connect(mapStateToProps, { updateNewBoardForm, createBoard })(NewBoardForm);