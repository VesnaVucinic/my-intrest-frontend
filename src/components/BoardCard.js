import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const BoardCard = ({ board }) => {
    return (
        board ?
        <div>
        <Container>
            <h4>{board.attributes.name}</h4>
            <img src={board.attributes.image_url} hight="150" width="150"  alt="..."></img><br/><br/>
            <Link to={`/boards/${board.id}/edit`}>Edit this board</Link>
        </Container>
        </div>:
        <p>This the the Trip card with no trip!</p>
        
    )
}

export default BoardCard

