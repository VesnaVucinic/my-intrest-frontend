import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// const MyBoards = props => {
//     const boardCards = props.boards.length > 0 ? 
//         props.boards.map(b => (<p key={b.id}><Link to={`/boards/${b.id}`}>{b.atributes.name}</Link></p>)) :
//         null

// return boardCards
// }       

// const mapStateToProps = state => {
//     return {
//         boards: state.MyBoards
//     }
// }

// export default connect(mapStateToProps)(MyBoards)

const MyBoards = ()  => {
    const boardCards = "Hello"

return boardCards
}       

export default MyBoards