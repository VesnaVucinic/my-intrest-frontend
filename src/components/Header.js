import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

export const Header = () =>{
    return(
      <Jumbotron >
        <div className="container title">
          <h1 className="display-5">Welcome to My-Interest!</h1>
        </div>
    </Jumbotron>

    )
}

export default Header

