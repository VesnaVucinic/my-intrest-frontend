import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { deleteBoard  } from  '../actions/myBoards'
import { connect } from 'react-redux'
import { likeBoard } from '../actions/myBoards'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



class BoardCard extends Component {

    render() {
        const { board, history, deleteBoard, likeBoard } = this.props;
        const boardId = board ? board.id : null
        console.log (board)

        return (
            board ?
           
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={board.attributes.image_url} hight="150" width="150"  alt="..."/>
                        <Card.Body>
                            <Card.Title>{board.attributes.name}</Card.Title>
                            <Card.Text>Uploaded by {board.attributes.user.name} <br/>
                                <Link to={`/boards/${board.id}/edit`}>Edit this board</Link>
                            </Card.Text>
                            <Button variant="light" className="justify-content-cener" size="sm" onClick={()=>deleteBoard(boardId, history)}>Delete this board</Button>
                            <Button variant="light" className="justify-content-cener" size="sm" onClick={() => likeBoard(board)}>❤️</Button> {board.attributes.likes}
    
                        </Card.Body>
                    </Card>
                :
            <p>This the the Board Card with no board!</p> 
        ) 
    }
}

const mapStateToProps = state => {
    return {
        boards: state.boards
    }
}
export default connect(mapStateToProps, { deleteBoard, likeBoard })(BoardCard)


