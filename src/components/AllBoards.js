import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { addBoardToMyBoards } from '../actions/allBoards'
// import { createFavoriteBoard } from '../actions/favoriteBoards'
import { likeBoard } from '../actions/myBoards'
// import { withRouter } from 'react-router-dom'



const AllBoards = (props) => {
    const allBoardsCards = props.boards.length > 0  
    ? 
        props.boards.map(board => (
                <Card  key={board.id} style={{ width: '18rem' }}>
                    <Link to={`/all-boards/${board.id}`}>
                        <Card.Img src={board.attributes.image_url} hight="150" width="150"  alt="..."/>
                    </Link>    
                    <Card.Body>
                        <Card.Title>{board.attributes.name}</Card.Title>
                        <Card.Text>Uploaded by {board.attributes.user.name}</Card.Text>
                        {/* <Button variant="light" className="justify-content-cener" size="sm" onClick={()=>createFavoriteBoard(board)}>Get this board</Button> */}
                        <Button variant="light" size="sm" onClick={() => props.likeBoard(board)}> ❤️ </Button> {board.attributes.likes}
                    </Card.Body>        
                </Card>
            )) 
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
        boards: state.allBoards,
        board: state.board
    }
}

export default connect(mapStateToProps, { likeBoard })(AllBoards)
// class AllBoards extends Component {
//     render() {
//         const { boards, board, likeBoard} = this.props
//         const allBoardsCards = boards.length > 0  
//         ? 
//             props.boards.map(board => (
//                     <Card  key={board.id} style={{ width: '18rem' }}>
//                         <Link to={`/all-boards/${board.id}`}>
//                             <Card.Img src={board.attributes.image_url} hight="150" width="150"  alt="..."/>
//                         </Link>    
//                         <Card.Body>
//                             <Card.Title>{board.attributes.name}</Card.Title>
//                             <Card.Text>Uploaded by {board.attributes.user.name}</Card.Text>
//                             {/* <Button variant="light" className="justify-content-cener" size="sm" onClick={()=>createFavoriteBoard(board)}>Get this board</Button> */}
//                             <Button variant="light" className="justify-content-cener" size="sm" onClick={() => likeBoard(board)}>Like</Button> {board.attributes.likes}
//                             <Button variant="light" className="justify-content-cener" size="sm" onClick={() => likeBoard(board)}>Not a Fan</Button> {board.attributes.likes}
    
//                         </Card.Body>        
//                     </Card>
//                 )) 
//         : 
//             null 
    
//         return (
//             <div className="flex-container">
//                 {allBoardsCards} 
//             </div>
//         )
//     }
// }
// const mapStateToProps = state => {
//     return {
//         boards: state.allBoards,
//         board: state.board
//     }
// }

// export default connect(mapStateToProps, { likeBoard })(AllBoards)

// const AllBoards = props => {
//     const allBoardsCards = props.boards.length > 0  
//     ? 
//         props.boards.map(board => (
//                 <Card  key={board.id} style={{ width: '18rem' }}>
//                     <Link to={`/all-boards/${board.id}`}>
//                         <Card.Img src={board.attributes.image_url} hight="150" width="150"  alt="..."/>
//                     </Link>    
//                     <Card.Body>
//                         <Card.Title>{board.attributes.name}</Card.Title>
//                         <Card.Text>Uploaded by {board.attributes.user.name}</Card.Text>
//                         {/* <Button variant="light" className="justify-content-cener" size="sm" onClick={()=>createFavoriteBoard(board)}>Get this board</Button> */}
//                         <Button variant="light" className="justify-content-cener" size="sm" onClick={() => likeBoard(board)}>Like</Button> {board.attributes.likes}
//                         <Button variant="light" className="justify-content-cener" size="sm" onClick={() => likeBoard(board)}>Like</Button> {board.attributes.likes}

//                     </Card.Body>        
//                 </Card>
//             )) 
//     : 
//         null 

//     return (
//         <div className="flex-container">
//             {allBoardsCards} 
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         boards: state.allBoards,
//         board: state.board
//     }
// }

// export default connect(mapStateToProps, { likeBoard })(AllBoards)
