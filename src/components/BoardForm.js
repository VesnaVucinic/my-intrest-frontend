import React from 'react';
// 1. We first grabthe action creator 
import { updateBoardForm } from "../actions/boardForm.js"
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header } from 'semantic-ui-react'


// 3. This means redux gives us back a prop called updateBoardForm 
//  which when invocked, actually Redux will now dispatch 
const BoardForm = ({ formData, updateBoardForm, userId, board, handleSubmit, editMode }) => {
   
   const{ name, imageUrl } = formData

    const handleChange= event =>{
       const { name, value } = event.target
    // 4. this is not an invocation of just the action creator,
    // it's now Redux dispatching the action  built by the actions
    // creator with apropriate aguments 
       updateBoardForm(name, value)
       
   }

    // return (
    //     <Container >
    //       <div className="BoardForm">
    //         <form onSubmit={event => {
    //             event.preventDefault()
    //             handleSubmit(formData, userId)
    //         }}>
    //             <input
    //                 name="name"
    //                 placeholder="name"
    //                 onChange={handleChange}
    //                 value={name}
    //             /><br/>
    //             <input
    //                 name="imageUrl"
    //                 placeholder="imageUrl"
    //                 onChange={handleChange}
    //                 value={imageUrl}
    //             /><br/>
    //             <input 
    //                 type="submit" 
    //                 value={editMode ? "Update Board" : " Create Board"}
    //             />
    //         </form>
    //        </div>
    //     </Container>    
    // )   

    // return ( 
            
    //     <Form className="boardCard" onSubmit={event => {
    //         event.preventDefault()
    //         handleSubmit(formData, userId)
    //     }} >
    //         <h3>{editMode ? "Update Board" : " Create Board"}</h3>
    //         <Form.Group >
    //             <Form.Control 
    //                name = "name"
    //                placeholder="name"
    //                onChange={handleChange} 
    //                type="text" 
    //                value={name}/>
    //         </Form.Group>
    //         <Form.Group >
    //             <Form.Control 
    //                name = "imageUrl"
    //                onChange={handleChange} 
    //                placeholder="imageUrl"
    //                type="text" 
    //                value={imageUrl}/>
    //         </Form.Group>
    //         <Button variant="primary" type="submit" value={editMode ? "Update Board" : " Create Board"}>{editMode ? "Update Board" : " Create Board"}</Button>
    //     </Form>
     
    // )


return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
        {editMode ? "Update Board" : " Create Board"}
      </Header>
        <Form size='large'>
          {/* <Segment  > */}
            <Form.Input fluid name = "name" placeholder='Board name' type="text" value={name} onChange={handleChange} />
            <Form.Input fluid name = "imageUrl" placeholder='Image Url' type='text' value={imageUrl} onChange={handleChange} />

            <Button type="button" color='blue' fluid size='large' onClick={event => {
                event.preventDefault()
                handleSubmit(formData, userId)
            }}>
                {editMode ? "Update Board" : " Create Board"}
          </Button>
          {/* </Segment> */}
        </Form>
      </Grid.Column>
    </Grid>
)

};
const mapStateToProps = state => {
    // const { name, imageUrl } = state.BoardForm
    // const userId = state.currentUser ? state.currentUser.id : ""
    return {
        // name,
        // imageUrl
        formData: state.boardForm,
        userId: state.currentUser ? state.currentUser.id : ""
    }
}
// 2. We pass the action creator to redux's connect function
// using eather mapDespatchToProps or the shorthand object syntax seen below
export default connect(mapStateToProps, { updateBoardForm })(BoardForm);                                                                                                                                                                                                                                                                                                                                                                                                