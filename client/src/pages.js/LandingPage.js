import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import '../styles/LandingPage.css'

class LandingPage extends Component{

    redirectLogin = e =>{
        e.preventDefault()
        this.props.history.push('/login')
    }

    redirectRegister = e =>{
        e.preventDefault()
        this.props.history.push('/signup')
    }

    render(){
        return(
            <div className='cover'>
                {/* <Link to="/login">Login</Link>
                <Link to="/signup">Register</Link> */}
                <div className='title'>
                <h1>Say Cheese!</h1>
                <h3>Create your Secret Recipe here</h3>
                <h3>Your not so secret recipe can be shared with all the Cheeser! </h3>
                </div>
                <div className='grid'>
                <button onClick = {this.redirectLogin} className="btn-large button-color">Login</button>
                <button onClick = {this.redirectRegister} className="btn-large button-color">Register</button>
                </div>
            </div>
        )
    }
}

export default withRouter(LandingPage)