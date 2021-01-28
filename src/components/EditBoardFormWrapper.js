import React from 'react';
import BoardForm from './BoardForm'
import { updateBoard  } from  '../actions/myBoards'
import { setFormDataForEdit, resetBoardForm  } from '../actions/boardForm'
import { connect } from 'react-redux'

class EditBoardFormWrapper extends React.Component {
    componentDidMount(){
      this.props.board && this.props.setFormDataForEdit(this.props.board)
    }

    componentWillUnmount() {
        this.props.resetBoardForm()
    }
    
    handleSubmit = (formData, userId) => {
        const { updateBoard, board, history } = this.props
        updateBoard({
            ...formData,
            boardId: board.id,
            userId,
        }, history)
    }
    render () {
        const { history  } = this.props
        return  <BoardForm editMode history={history} handleSubmit={this.handleSubmit}/>
    }
};

export default connect(null, { updateBoard, setFormDataForEdit, resetBoardForm  })(EditBoardFormWrapper);