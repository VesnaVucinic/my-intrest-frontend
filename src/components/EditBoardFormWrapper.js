import React from 'react';
import BoardForm from './BoardForm'
import { updateBoard, deleteBoard  } from  '../actions/myBoards'
import { setFormDataForEdit, resetBoardForm  } from '../actions/boardForm'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'



import { connect } from 'react-redux'

class EditBoardFormWrapper extends React.Component {
    componentDidMount(){
      this.props.board && this.props.setFormDataForEdit(this.props.board)
    }

    componentDidUpdate(prevProps) {
        this.props.board && !prevProps.board && this.props.setFormDataForEdit(this.props.board)
    }
    
    componentWillUnmount() {
        this.props.resetBoardForm()
    }
    // ({ history, updateBoard }) 
    // I am passing down handleSubmit as prop to BoardForm, destructur and referensing in return  when press submit in fprm I am invoking handleSubmit in this class component that prevent default ect ect
     handleSubmit = (formData, userId) => {
        const { updateBoard, board, history } = this.props
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
        const { history, deleteBoard, board } = this.props
        const boardId = board ? board.id : null
        return  <Container >
                    <BoardForm editMode history={history} handleSubmit={this.handleSubmit}/>
                    <br/>
                    <Button variant="light" className="justify-content-end" size="sm" onClick={()=>deleteBoard(boardId, history)}>Delete this board</Button>

                </Container >
    }
};

export default connect(null, { updateBoard, setFormDataForEdit, resetBoardForm, deleteBoard  })(EditBoardFormWrapper);