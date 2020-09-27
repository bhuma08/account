import React, { Component } from 'react';
import { withRouter } from "react-router";
import '../styles/logout.css'

class Logout extends Component {

    redirect = e =>{
        e.preventDefault()
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <button className='logout' onClick={this.redirect}>Logout</button>
                
            </div>
        )
    }
}

export default withRouter(Logout)
