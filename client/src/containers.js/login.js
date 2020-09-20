import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


class LoginCard extends Component {


     state = {
            email: '',
            password: '',
            token: ''

    }

    handleChange(e) {
        this.setState({ email: e.target.email.value })
        this.setState({ email: e.target.password.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
    
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        }
    
        fetch('http://localhost:3000/login', options)
            .then(r => r.json())
            .then(data=>{
                if(data.id){
                    this.setState({ token: data.accessToken})
                    this.props.history.push({
                        pathname: `/${data.id}/dashboard`
                    })
                    console.log(this.state.token)
                    this.props.add(this.state.token);
                }
          
            }).catch(err => alert('Invalid Login'))    
    }

    render() {
        return (
            <div>
               
                <form onSubmit={this.handleSubmit} className="login-form">
                    <label>Email</label>
                    <input type="text" name="email" id="email" onChange={this.handleChange}></input>
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} id="password"></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    add: accessToken => dispatch({ type: "ADD_TOKEN", payload: accessToken})
})


export default connect(null,mDTP)(LoginCard);