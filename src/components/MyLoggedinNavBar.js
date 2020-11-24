import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'




export const MyLoggedInNavBar = ({logOut}) =>{
    return(
      <Navbar bg={"dark"}>
        <div className="container">
           <Nav> 
           <Nav.Link as={Link}   style={{color: "azure"}} to="/"></Nav.Link> 
           <Button size="sm" onClick = {logOut}>Log Out</Button>
           </Nav>
        </div>
    </Navbar>

    )
}

export default MyLoggedInNavBar