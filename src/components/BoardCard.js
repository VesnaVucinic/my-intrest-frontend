import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { deleteBoard  } from  '../actions/myBoards'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'




const BoardCard = ({ board  }) => {
    // const { history, deleteBoard } = props
    // const boardId = board ? board.id : null
    return (
        board ?
        <div>
        <Container>
            <h4>{board.attributes.name}</h4>
            <img src={board.attributes.image_url} hight="150" width="150"  alt="..."></img><br/><br/>
            <Link to={`/boards/${board.id}/edit`}>Edit this board</Link>
            {/* <Button variant="light" className="justify-content-cener" size="sm" onClick={()=>deleteBoard(boardId, history)}>Delete this board</Button> */}
        </Container>
        </div>:
        <p>This the the Board Card with no board!</p>
        
    )
}

// export default connect(null, { deleteBoard }(BoardCard))
export default BoardCard
