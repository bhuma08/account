import React, { Component } from 'react';
import { withRouter } from "react-router";

class Logout extends Component {

    redirect = e =>{
        e.preventDefault()
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <button onClick={this.redirect}>Logout</button>
                
            </div>
        )
    }
}

export default withRouter(Logout)
