import React from 'react'

const BoardCard = ({ board }) => {
    return (
        <div>
            <h4>{board.attributes.name}</h4>
            <img src={board.attributes.image_url} hight="100" width="100"  alt="..."></img>
        </div>
    )
}

export default BoardCard

