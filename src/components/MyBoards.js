import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button, Label, Segment} from 'semantic-ui-react'

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
                                {/* <Icon name='heart' color="red" size='large'/> */}
                                {/* <strong>{board.attributes.likes}</strong>  */}
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
        // <Segment raised>
        <Card.Group style={{ margin: '15px', justifyContent: 'center'}}>
            {boardCards} 
        </Card.Group>
        // </Segment>
    )
}

const mapStateToProps = state => {
    return {
        boards: state.myBoards
    }
}

export default connect(mapStateToProps)(MyBoards)
