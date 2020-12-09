import React from 'react'
import { connect } from 'react-redux'
import BoardCard from './BoardCard.js'

const MyBoards = props => {
    const boardCards = props.boards.length > 0  ? 
    props.boards.map(board => <BoardCard board={board} key={board.id}  />) :
    null 
    return (
        boardCards 
    )
}

// const MyBoards = props => {
//     const boardCards = props.boards.length > 0 ? 
//         props.boards.map(b => (<p key={b.id}><Link to={`/boards/${b.id}`}>{b.atributes.name}</Link></p>)) :
//         null
   
//     return boardCards
// } 


const mapStateToProps = state => {
    return {
        boards: state.myBoards
    }
}

export default connect(mapStateToProps)(MyBoards)
