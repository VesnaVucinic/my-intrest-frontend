import React from 'react';
// 1. We first grabthe action creator 
import { updateBoardForm } from "../actions/boardForm.js"
import { createBoard } from  '../actions/myBoards'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'

// 3. This means redux gives us back a prop called updateBoardForm 
//  which when invocked, actually Redux will now dispatch 
const BoardForm = ({ formData, updateBoardForm, userId, board, handleSubmit, editMode }) => {
   
   const{ name, imageUrl } = formData

    const handleChange= event =>{
    console.log("trigger Handle change")
       const { name, value } = event.target
    // 4. this is not an invocation of just the action creator,
    // it's now Redux dispatching the action  built by the actions
    // creator with apropriate aguments 
       updateBoardForm(name, value)
       
   }

    return (
        <Container >
          <div className="BoardForm">
            <form onSubmit={event => {
                event.preventDefault()
                handleSubmit(formData)
            }}>
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
                    value={editMode ? "Update Board" : " Create Board"}
                />
            </form>
           </div>
        </Container>    
    )   
    };
const mapStateToProps = state => {
    // const { name, imageUrl } = state.BoardForm
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        // name,
        // imageUrl
        formData: state.boardForm,
        userId
    }
}
// 2. We pass the action creator to redux's connect function
// using eather mapDespatchToProps or the shorthand object syntax seen below
export default connect(mapStateToProps, { updateBoardForm })(BoardForm);                                                                                                                                                                                                                                                                                                                                                                                                