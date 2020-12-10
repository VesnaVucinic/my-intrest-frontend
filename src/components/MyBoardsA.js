import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import BoardCard from './BoardCard.js'

// myBoards will be responsable of rendering bunch of myBoard components
const MyBoards = props => {
//     const boardCards = props.boards.length > 0 ? 
//         props.boards.map(b => (<p key={b.id}><Link to={`/boards/${b.id}`}>{b.atributes.name}</Link></p>)) :
//         null
    const boardCards = props.boards.map(b => <BoardCard board={b}  />)
    return (
        boardCards.length > 0 ? boardCards : null
    )
// return boardCards
}       

// mstp needs to return object
// how I know that I need mstp: If I need any peace from state(what I have I can track in redux tool) or subset of the state  any chank of information from the state in this paticular component if it yes then i need mstp

const mapStateToProps = state => {
    return {
        boards: state.MyBoards
        // after state needs to be called exactly lake in store myBoards
        //  key is named how I will use it as props in this component an that is boards
        // to have boards awailable to this component I need connect.
        //  Connect is function that returns function and takes up to 4 arguments first is mstp second mdtp
        // If I don't need  the action creator to give to redux (I don't need to give any functionality) then I don't need mdtp
    }
}

// function mapStateToProps(state) {
//     return {
//         boards: state.myBoards
//     }
// }

// const mapStateToProps = ({ myBoards }) => {
//     // I can manipulate state to for ex I need only one attribute of board
//     // const boardNames = myBoards.map(b => b.name)
//     return {
//         // myBoardNames: boardNames,
//         myBoards
//     }
// }



// or
// const mapStateToProps = ({myBoards}) => {
//     return {
//         boards: myBoards
//         // or just myBoards
//     }
// }



export default connect(mapStateToProps)(MyBoards)
// export default functionReturndFromInvokingConnectThatNowWillSupplyMyTripsWithPropsIncludingStateAsDiscrabedInMSTPAndActionsAsDescribedInMDTP(myTrips)
// it takes myTrips as an argument and when it's finally invoced the return value of this all finction  connected a MyTrips component with new props
// that we described in boath mSTP and MDTP

// const MyBoards = ()  => {
//     const boardCards = "Hello"

// return boardCards
// }       

// export default MyBoards