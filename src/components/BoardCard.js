import React, { Component } from 'react'
import { deleteBoard  } from  '../actions/myBoards'
import { connect } from 'react-redux'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class BoardCard extends Component {
    
    render() {
        const { board, history, deleteBoard } = this.props;
        const boardId = board ? board.id : null
        console.log (board)

        return (
            board ?
                    <Card style={{ width: '18rem', marginRight: 'auto', marginLeft: 'auto'}}>
                        <Image src={board.attributes.image_url} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{board.attributes.name}</Card.Header>
                        <Card.Description>
                            Uploaded by {board.attributes.user.name}
                        </Card.Description><br/>
                            <div className='ui two buttons'>
                                    <Button type="button" color="blue" as={Link} to={`/boards/${board.id}/edit`}>
                                        Edit this board 
                                    </Button>
                                <Button   color="black" onClick={()=>deleteBoard(boardId, history)}>Delete this board</Button>
                            </div><br/><br/>
                                {/* <a>
                                    <Icon name='heart' color="red" size='large' onClick={() => likeBoard(board)}/>
                                    <strong>{board.attributes.likes}</strong>
                                </a> */}
                                {/* <Button as='div' labelPosition='right'>
                                    <Button icon  color='red' >
                                        <Icon name='heart' />
                                        Liked
                                    </Button>
                                    <Label as='a' basic color='red' basic pointing='left'>
                                        <strong>{board.attributes.likes}</strong>
                                    </Label>
                                </Button> */}
                        </Card.Content>
                     </Card>
                :
            <p>This the the Board Card with no board!</p> 
        ) 
    }
}

const mapStateToProps = state => {
    return {
        boards: state.boards
    }
}
export default connect(mapStateToProps, { deleteBoard })(BoardCard)


