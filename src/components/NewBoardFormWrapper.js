import React from 'react';
import BoardForm from './BoardForm'
import { createBoard } from  '../actions/myBoards'
import { connect } from 'react-redux'

const NewBoardFormWrapper = ({ history, createBoard }) => {
    
    const handleSubmit = (formData, userId) => {
        createBoard({
            ...formData,
            userId,
        }, history)
    }

    return <BoardForm  history={history} handleSubmit={handleSubmit}/>
  
};

export default connect(null, { createBoard })(NewBoardFormWrapper);