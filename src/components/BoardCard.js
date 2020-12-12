import React from 'react'
import Container from 'react-bootstrap/Container'

const BoardCard = ({ board }) => {
    return (
        <Container>
            {/* <h4>{board.attributes.name}</h4> */}
                <img src={board.attributes.image_url} hight="150" width="150"  alt="..."></img>
        </Container>
    )
}

export default BoardCard

