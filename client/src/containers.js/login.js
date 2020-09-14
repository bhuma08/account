import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Dashboard from './dashboard'


class LoginCard extends Component {


     state = {
            email: '',
            password: '',
            info: ''
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

        console.log(data)
    
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        }
    
        fetch('http://localhost:3000/login', options)
            .then(r => r.json())
            .then(data=>{
                if(data.id){
                    console.log(data)
                    this.setState({info : data.id})    
                }
          
            }).catch(err => alert('Invalid Login'))     

        console.log(this.state.info)

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
                    <Dashboard id={this.state.info}></Dashboard>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginCard);