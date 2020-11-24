import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'




export const MyNotLoggedInNavBar = () =>{
    return(
      <Navbar bg={"dark"}>
        <div className="container">
           <Nav>
           <Nav.Link as={Link}  style={{color: "azure"}} to="/"></Nav.Link>
           <Nav.Link as={Link}  style={{color: "azure"}} to="/signup">Sign up</Nav.Link>
           <Nav.Link as={Link}  style={{color: "azure"}} to="/login">Log in</Nav.Link>
           </Nav>
        </div>
    </Navbar>

    )
}

export default MyNotLoggedInNavBar