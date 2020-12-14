import React from 'react';
import BoardForm from './BoardForm'
import { updateBoard } from  '../actions/myBoards'
import { setFormDataForEdit } from '../actions/tripForm'

import { connect } from 'react-redux'

class EditBoardFormWrapper extends React.Component {
    componentDidMount(){
      this.props.trip && this.props.setFormDataForEdit(this.props.trip)
    }
    // ({ history, updateBoard }) 
     handleSubmit = (event, formData, userId, history) => {
        console.log("in handleSubmit event is", event)
        const { updateBoard, board } = this.props
        event.preventDefault()
        updateBoard({
            ...formData,
            boardId: board.id,
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
    render () {
        const { history, handleSubmit } = this.props
        return <BoardForm editMode history={history} handleSubmit={handleSubmit}/>
    }
};

export default connect(null, { updateBoard, setFormDataForEdit })(EditBoardFormWrapper);