import React from 'react';
import BoardForm from './BoardForm'
import { createBoard } from  '../actions/myBoards'
import { connect } from 'react-redux'

const NewBoardFormWrapper = ({ history, createBoard }) => {
    
    const handleSubmit = (formData, userId) => {
        createBoard({
            ...formData,
            userId,
            // this obj represent data that go to backend
            //  that is way history is second argument
        }, history)
        // and now in action creator createBoard I am passing history as argument also

        // formData: {
        //     name: ""
        //     imageUrl: ""
        // }

    }

    return <BoardForm history={history} handleSubmit={handleSubmit}/>
  
};

export default connect(null, { createBoard })(NewBoardFormWrapper);