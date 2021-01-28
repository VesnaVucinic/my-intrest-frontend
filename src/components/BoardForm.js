import React from 'react';
// 1. We first grab the action creator 
import { updateBoardForm } from "../actions/boardForm.js"
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header } from 'semantic-ui-react'

const BoardForm = ({ formData, updateBoardForm, userId, handleSubmit, editMode }) => {
   
   const{ name, imageUrl } = formData

    const handleChange= event =>{
       const { name, value } = event.target
       updateBoardForm(name, value)
   }
  return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
          {editMode ? "Update Board" : " Create Board"}
        </Header>
          <Form size='large'>
              <Form.Input fluid name = "name" placeholder='Board name' type="text" value={name} onChange={handleChange} />
              <Form.Input fluid name = "imageUrl" placeholder='Image Url' type='text' value={imageUrl} onChange={handleChange} />

              <Button type="button" color='blue' fluid size='large' onClick={event => {
                  event.preventDefault()
                  handleSubmit(formData, userId)
              }}>
                  {editMode ? "Update Board" : " Create Board"}
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
  )

};
const mapStateToProps = state => {
    return {
        formData: state.boardForm,
        userId: state.currentUser ? state.currentUser.id : ""
    }
}

export default connect(mapStateToProps, { updateBoardForm })(BoardForm);                                                                                                                                                                                                                                                                                                                                                                                                