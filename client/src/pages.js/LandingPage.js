import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component{
    render(){
        return(
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Register</Link>
            </div>
        )
    }
}

export default LandingPage