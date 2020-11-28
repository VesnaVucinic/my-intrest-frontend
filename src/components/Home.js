import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h2>Welcome please sign up or log in </h2>
        <span>
            <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
        </span>
    </div>
)

export default Home;