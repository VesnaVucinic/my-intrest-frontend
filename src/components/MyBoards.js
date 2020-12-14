import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const MyBoards = props => {
    const boardCards = props.boards.length > 0  ? 
    props.boards.map(board => (<p key={board.id}><Link to={`/boards/${board.id}`}><img src={board.attributes.image_url} hight="150" width="150"  alt="..."></img></Link></p>)) : 
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
