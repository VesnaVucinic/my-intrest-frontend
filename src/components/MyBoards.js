import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'

const MyBoards = props => {
    const boardCards = props.boards.length > 0  
    ? 
        props.boards.map(board => (
            
                <Card key={board.id} style={{ width: '15rem'}}>
                        <Image as={Link} to={`/boards/${board.id}`}   src={board.attributes.image_url} wrapped ui={false}/>
                        <Card.Content>
                            <Card.Header><strong>{board.attributes.name}</strong></Card.Header>
                            <Card.Description>
                                Uploaded by {board.attributes.user.name}
                            </Card.Description><br/>
                                {/* <Icon name='heart' color="red" size='large'/> 
                                <strong>{board.attributes.likes}</strong>  */}
                                <Button as='div' labelPosition='right'>
                                    <Button icon  color='red' >
                                        <Icon name='heart' />
                                        Liked
                                    </Button>
                                    <Label as='a'  color='red' basic pointing='left'>
                                        <strong>{board.attributes.likes}</strong>
                                    </Label>
                                </Button>
                        </Card.Content>
                </Card> 
                
            ))
    : 
        null 
    return (
        <Card.Group style={{ margin: '15px', justifyContent: 'center'}}>
            {boardCards} 
        </Card.Group>
    )
}

// mstp needs to return object
// how I know that I need mstp: If I need any peace from state(what I have I can track in redux tool) or subset of the state  any chank of information from the state in this paticular component if it yes then i need mstp
const mapStateToProps = state => {
    return {
        boards: state.myBoards
        // after state needs to be called exactly lake in store myBoards
        //  key is named how I will use it as props in this component an that is boards
        // to have boards awailable to this component I need connect.
        //  Connect is function that returns function and takes up to 4 arguments first is mstp second mdtp
        // If I don't need  the action creator to give to redux (I don't need to give any functionality) then I don't need mdtp
    }
}
// or
// const mapStateToProps = ({myBoards}) => {
//     return {
//         boards: myBoards
//         // or just myBoards
//     }
// }

// const mapStateToProps = ({ myBoards }) => {
//     // I can manipulate state to for ex I need only one attribute of board
//     const boardNames = myBoards.map(b => b.name)
//     return {
//         // myBoardNames: boardNames,
//         myBoards
//     }
// }


export default connect(mapStateToProps)(MyBoards)
// export default functionReturndFromInvokingConnectThatNowWillSupplyMyTripsWithPropsIncludingStateAsDiscrabedInMSTPAndActionsAsDescribedInMDTP(myTrips)
// it takes myTrips as an argument and when it's finally invoced the return value of this all finction  connected a MyTrips component with new props
// that we described in boath mSTP and MDTP