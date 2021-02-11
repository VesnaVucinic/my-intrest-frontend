import React from 'react'
import { connect } from 'react-redux'
import { likeBoard } from '../actions/myBoards'
import { Card, Icon, Image, Label, Button, Input } from 'semantic-ui-react'

class AllBoards extends React.Component {
    state = {
        search: "",
        sorted: false
    }

    handleChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    sortedBoards = () => {
        const newBoardsArray = [...this.props.boards];
        const sorted = newBoardsArray.sort((a, b) => {
            return a.attributes.likes > b.attributes.likes ? -1 : 1
        });
        // console.log(soarted)
        return sorted
        
    }

    sortBoards =()=> {
        this.setState({
            sorted: true,
        })
    }

    render() {
        const { search } = this.state;
        const filteredBoards = this.props.boards.filter(board => {
            return board.attributes.name.toLowerCase().indexOf(search.toLowerCase()) !== -1})
        const data = this.state.sorted ? this.sortedBoards() : filteredBoards

        const allBoardsCards = this.props.boards.length > 0  
            ? 
            data.map(board => (
                        <Card  key={board.id} style={{ width: '15rem'}}>
                            <Image src={board.attributes.image_url} wrapped ui={false}/>
                            <Card.Content>
                                <Card.Header>{board.attributes.name}</Card.Header>
                                <Card.Description>
                                    Uploaded by {board.attributes.user.name}
                                </Card.Description><br/>
                                {this.props.currentUser ?
                                    <Button as='div' labelPosition='right'>
                                        <Button icon  color='red' onClick={() => this.props.likeBoard(board)}>
                                            <Icon name='heart' />
                                            Like
                                        </Button>
                                        <Label as='a' basic color='red' basic pointing='left'>
                                            <strong>{board.attributes.likes}</strong>
                                        </Label>
                                    </Button>
                                : 
                                    <Button as='div' labelPosition='right'>
                                        <Button icon  color='red' >
                                            <Icon name='heart' />
                                            Liked
                                        </Button>
                                        <Label as='a'  color='red' basic pointing='left'>
                                            <strong>{board.attributes.likes}</strong>
                                        </Label>
                                    </Button>
                                }
                            
                            </Card.Content>
                        </Card>  
                    )) 
            : 
                null 

            return (
                <div>
                    {this.props.currentUser ?
                    <>
                    <Input type='search' icon='search' placeholder='Search board' onChange={this.handleChange} size='large' style={{marginTop: '20px'}}/>
                    
                    <Button color='red' size='small'style={{margin: '25px'}} onClick={this.sortBoards}>
                        Most <Icon color='white' name='heart ' size='small'/>
                    </Button>
                    </>
                    : null }
                    <Card.Group  style={{ margin: '15px', justifyContent: 'center'}}>
                        {allBoardsCards} 
                    </Card.Group>
                </div>
            )
    }
   
}

const mapStateToProps = state => {
    return {
        boards: state.allBoards,
        board: state.board,
        currentUser: state.currentUser
        
    }
}

export default connect(mapStateToProps, { likeBoard })(AllBoards)
