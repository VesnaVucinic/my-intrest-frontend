import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { getAllBoards } from '../actions/allBoards'
import { Segment, Button, Header} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { clearAllBoards } from '../actions/allBoards'
import LoggedInNavBar from './LoggedInNavBar'

class Home extends Component {
  
    componentDidMount() {
        this.props.getAllBoards()
    }

    render() {
       
        return (
            <div>
                { this.props.loggedIn ? 
                    <LoggedInNavBar/>
                :
                <Segment style={{marginTop: '10px'}} raised placeholder>
                    <Header>
                        <h1>Welcome to My-Interest!</h1><br/>
                        <h3>To see more datails about images or create your own, please Sign Up or if you have account Log In</h3>
                    </Header>
                    <Segment.Inline>
                        <Button primary  as={Link} to="/login" size='large' onClick={()=>this.props.clearAllBoards()}> Log In </Button>
                        <Button primary as={Link} to="/signup" size='large' onClick={()=>this.props.clearAllBoards()}> Sign Up </Button>
                    </Segment.Inline>
                </Segment>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        boards: state.allBoards, 
        loggedIn: !!state.currentUser,

    }
}

export default connect(mapStateToProps, {  clearAllBoards, getAllBoards, })(Home)