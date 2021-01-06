import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { getAllBoards } from '../actions/allBoards'
import NotLoggedInNavBar from './NotLoggedInNavBar'
import AllBoards from './AllBoards'

class Home extends Component {
  
    componentDidMount() {
        this.props.getAllBoards()
    }

    render() {
     
        return (
            <div>
                <NotLoggedInNavBar/>
                {this.props.boards.length > 0 ? <AllBoards boards={this.props.boards} /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        boards: state.allBoards, 
    }
}

export default connect(mapStateToProps, { getAllBoards })(Home)