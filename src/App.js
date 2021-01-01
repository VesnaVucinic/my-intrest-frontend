import React from 'react'
import './App.css';
import { getCurrentUser } from "./actions/currentUser"
import { connect } from 'react-redux';
import NavBar from './components/NavBar'
import LoggedInNavBar from './components/LoggedInNavBar'
import NotLoggedInNavBar from './components/NotLoggedInNavBar'
import Header from './components/Header'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyBoards from './components/MyBoards.js'
import AllBoards from './components/AllBoards.js'

import BoardForm from './components/BoardForm'
import BoardCard from './components/BoardCard'
import Home from './components/Home'
import { setFormDataForEdit } from './actions/boardForm'
import NewBoardFormWrapper from './components/NewBoardFormWrapper'

import { Route, Switch, withRouter, Link } from 'react-router-dom'


import MainContainer from './components/MainContainer';
import Logout from './components/Logout';
import EditBoardFormWrapper from './components/EditBoardFormWrapper';
import allBoards from './reducers/allBoards';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'





class App extends React.Component {
  // whenever component mount I am sending request to check is someone is logged in
  componentDidMount() {
    // console.log("hello")
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, myBoards, setFormDataForEdit } = this.props
    return (
      <div className="App">
        {/* { loggedIn ? <NavBar/> : <Home/> } */}
        {loggedIn ? <LoggedInNavBar/>: <NotLoggedInNavBar/>}
        
        {/* <Header /> */}
        <Switch>
          <Route exact path='/signup' render={()=><Signup/>}/>
          <Route exact path='/login' component={Login}/>
          {/* <Route exact path='/' render={() => loggedIn ? <MyBoards/> : <Home/>}/> */}
          <Route exact path='/boards' component={MyBoards}/>
          
          <Route exact path='/boards/new' component={NewBoardFormWrapper}/>
          {/* I am rendering new board as a child directly of a route and when I use component then route will authomaticly pass those props along to this component 
          if I split it up into render like for Signup then I have to be more specific which roure props I want to supply
          like: <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          ?then I dont need withRouter*/}
          <Route exact path='/boards/:id' render={props => {
          //  I need to pass down attributes of board and obj that contains that info is my trip obj which I need to get from state 
          // router props that givs me ability to look at the parametars from the URL and grab the one I need and that is match: match.params.id
          // match have params that is grabing all the dynamic peaces of URL whose name is defined on the end of URL in this case :id
          //  dynamic part of URL is captured and stored in an match obj called params the key is whwtever I called in this case id
          const board = myBoards.find(board => board.id === props.match.params.id) 
          console.log(board)
          // obj that I found I am passing down as a prop to my board card board={board}
          return <BoardCard board={board} {...props}/>
          }
          }/>
          <Route exact path='/boards/:id/edit' render={props => {
            const board = myBoards.find(board => board.id === props.match.params.id) 
            // dispatch updateForn -> trip, react will not alowed change of state inside render method that need to be pure
            return (
                      <Container>
                         <Row>
                          <Col >
                            <BoardCard board={board} {...props}/>
                            {/* <EditBoardFormWrapper board={board} {...props}/> */}
                          </Col> 
                          <Col >  
                            <EditBoardFormWrapper board={board} {...props}/>
                            {/* <BoardCard board={board} {...props}/>  */}
                          </Col>
                        </Row>
                      </Container>
                    )
          }
          }/>
          <Route exact path='/all-boards' component={AllBoards}/>
          {/* <Route exact path='/all-boards/:id' render={props => {
           const board = allBoards.find(board => board.id === props.match.params.id) 
           console.log(board)

           return <BoardCard board={board} {...props}/>
          } 
          }/> */}
        </Switch>
      </div>
          
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    // allBoards: state.allBoards
    myBoards: state.myBoards,
    allBoards: state.allBoards


    // loogdIn is boolean version of state.currentUser, I dont need whole object currentUser but only to know in app is someone logged in. Can be only currentUser in return
    // I am manipulating Redux state and getting only what I need which is weather is someone logged in or not 
  })
}

// export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
// export default connect(mapStateToProps, { getCurrentUser })(App);
export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));