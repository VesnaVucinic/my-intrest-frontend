import React from 'react'
import './App.css';
import { getCurrentUser } from "./actions/currentUser"
import { connect } from 'react-redux';
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyBoards from './components/MyBoards.js'
import AllBoards from './components/AllBoards.js'
import BoardCard from './components/BoardCard'
import Home from './components/Home'
import NewBoardFormWrapper from './components/NewBoardFormWrapper'
import { Route, Switch, withRouter } from 'react-router-dom'
import EditBoardFormWrapper from './components/EditBoardFormWrapper';
import { Container } from 'semantic-ui-react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getAllBoards } from './actions/allBoards'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { myBoards } = this.props
    return (
      <div fluid className="App">
        <Home/>
        <Switch>
          <Route exact path="/" component={AllBoards}/>  
          <Route exact path='/signup' render={()=><Signup/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/boards' component={MyBoards}/>
          <Route exact path='/boards/new' 
            render={(props)=>
            <Row>
              <Col>
              <MyBoards/>
              </Col> 
              <Col >  
              <NewBoardFormWrapper {...props} />
              </Col>
            </Row>
            }
          />  
          <Route exact path='/boards/:id' render={props => {
          const board = myBoards.find(board => board.id === props.match.params.id) 
          console.log(board)
          return <BoardCard board={board} {...props}/>
          }
          }/>
          <Route exact path='/boards/:id/edit' render={props => {
            const board = myBoards.find(board => board.id === props.match.params.id) 
            return (
                      <Container style={{marginTop: '20px'}}>
                         <Row>
                          <Col>
                            <BoardCard className="boardCard" board={board} {...props}/>
                          </Col> 
                          <Col >  
                            <EditBoardFormWrapper board={board} {...props}/>
                          </Col>
                        </Row>
                      </Container>
                    )
            }
          }/>
          <Route exact path='/all-boards' render={props =><AllBoards {...props}/>}/>
        </Switch>
      </div>
          
    );
  }
}

const mapStateToProps = state => {
  return ({
    myBoards: state.myBoards,
    allBoards: state.allBoards
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser,getAllBoards })(App));