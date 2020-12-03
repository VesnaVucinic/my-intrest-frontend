import React from 'react'

const BoardCard = ({ board }) => {
    return (
        <div>
            <h3>{board.attributes.name}</h3>
        </div>
    )
}

export default BoardCard

