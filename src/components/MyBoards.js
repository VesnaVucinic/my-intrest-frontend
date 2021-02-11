import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'

class MyBoards extends React.Component {
    
    state = {
        sorted: false,
    }

    sortedBoards = () => {
        const newBoardsArray = [...this.props.boards];
        const sorted = newBoardsArray.sort((a, b) => {
            // return a.attributes.name.localeCompare(b.attributes.name)
            return a.attributes.name > b.attributes.name ? 1 : -1
        });
        // console.log(soarted)
        return sorted
        
    }

    sortBoards =()=> {
        this.setState({
            sorted: true,
        })
    }

    render () {
        const reversedOrder  = [...this.props.boards].reverse()
        const data = this.state.sorted ? this.sortedBoards() : reversedOrder
        const boardCards = this.props.boards.length > 0  
        ? 
            data.map(board => (
                    <Card key={board.id} style={{ width: '15rem'}}>
                            <Image as={Link} to={`/boards/${board.id}`} src={board.attributes.image_url} wrapped ui={false}/>
                            <Card.Content>
                                <Card.Header><strong>{board.attributes.name}</strong></Card.Header>
                                <Card.Description>
                                    Uploaded by {board.attributes.user.name}
                                </Card.Description><br/>
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
            <div>
                <Button basic size='large'style={{margin: '25px'}} onClick={this.sortBoards}>
                    <Icon name='sort alphabet down' size='large' />
                </Button>
                <Card.Group style={{ justifyContent: 'center'}}>
                    {boardCards} 
                </Card.Group>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        boards: state.myBoards
    }
}

export default connect(mapStateToProps)(MyBoards)
