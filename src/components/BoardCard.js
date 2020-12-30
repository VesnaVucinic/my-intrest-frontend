import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { deleteBoard  } from  '../actions/myBoards'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const BoardCard = ({ board, history, deleteBoard }) => {
    const boardId = board ? board.id : null
    console.log (board)

    return (
        board ?
        <div>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={board.attributes.image_url} hight="150" width="150"  alt="..."/>
                    <Card.Body>
                        <Card.Title>{board.attributes.name}</Card.Title>
                        <Card.Text>Uploaded by {board.attributes.user.name} <br/>
                            <Link to={`/boards/${board.id}/edit`}>Edit this board</Link>
                        </Card.Text>
                        <Button variant="light" className="justify-content-cener" size="sm" onClick={()=>deleteBoard(boardId, history)}>Delete this board</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>:
        <p>This the the Board Card with no board!</p>
        
    )
}

export default connect(null, { deleteBoard })(BoardCard)
