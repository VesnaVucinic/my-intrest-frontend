import React from 'react'
import LoginForm from './loginForm'
import MyProfileContainer from '../containers/myProfileContainer'
import {connect} from 'react-redux'
import Signup from './Signup'



class UserContainer extends React.Component{
    
    renderProperContent = ()=>{
        let path = this.props.match.path
        if (this.props.loggedIn){
            return  <MyProfileContainer user={this.props.user}/>
        }else if(path==="/signup"){
            return <Signup />
        }else{
            return <LoginForm />
        }
    }


    render(){
        return (
            <React.Fragment>
                {this.renderProperContent()}
            </React.Fragment>
        )
      
        
    }
}

const mapStateToProps = state =>{
    return {
        user: state.user.user,
        loggedIn: state.user.login
    }
}


export default connect(mapStateToProps)(UserContainer)