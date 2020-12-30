import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


const AllBoards = props => {
    const allBoardsCards = props.boards.length > 0  
    ? 
        props.boards.map(board => (
            <p key={board.id}>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Link to={`/all-boards/${board.id}`}>
                        <Card.Img src={board.attributes.image_url} hight="150" width="150"  alt="..."/>
                    </Link>    
                    <Card.Body>
                        <Card.Title>{board.attributes.name}</Card.Title>
                        <Card.Text>Uploaded by {board.attributes.user.name}</Card.Text>
                    </Card.Body>        
                </Card>
            </Container>
            </p>)) 
    : 
        null 

    return (
        <div className="flex-container">
            {allBoardsCards} 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        boards: state.allBoards
    }
}

export default connect(mapStateToProps)(AllBoards)