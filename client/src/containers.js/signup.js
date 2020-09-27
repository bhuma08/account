import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../styles/signup.css'


class SignUpCard extends Component {

     state = {
            name: '',
            email: '',
            password: ''

    }

    handleChange(e) {
        this.setState({ name: e.target.name.value})
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
    
        fetch('http://localhost:3000/user', options)
            .then(r => r.json())
            .then(this.props.history.push(`/login`))
            .catch((console.warn()))     

    }

    render() {
        return (
            <div>
               
                <form onSubmit={this.handleSubmit} className="login-form">
                    <label>Name</label>
                    <input type="text" name="name" className="input-signup" onChange={this.handleChange}></input>
                    <label>Email</label>
                    <input type="text" name="email" className="input-signup" onChange={this.handleChange}></input>
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} className="input-signup"></input>
                    <input className='signup-submit'type='submit'></input>
                </form>
            </div>
        )
    }
}

export default withRouter(SignUpCard);