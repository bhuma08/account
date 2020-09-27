import React, { Component } from 'react';
import '../styles/sharepost.css'


class SharePost extends Component{

    sharepost = e => {
        e.preventDefault()

        const data = {
            recipe: this.props.recipe,  
        }
    
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        }
    
        fetch(`http://localhost:3000/cheese/all`, options)
            .then(r => r.json())
            // .then(console.log(data))
            // .then(this.props.history.push(`/${this.state.userid}/dashboard`))
            .catch(console.warn)   
    }

    render(){
        return (
            <div>
                <button className='share' onClick ={this.sharepost}>Share</button>

            </div>
        )
    }

}

export default SharePost;