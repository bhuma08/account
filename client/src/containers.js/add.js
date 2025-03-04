import React, {Component} from 'react'
import { withRouter } from "react-router";
import '../styles/add.css';

class AddNew extends Component {
    state = {
        recipe : '',
        userid: this.props.match.params.id,
    }

    handleChange = e => {
        this.setState({ recipe: e.target.recipe.value })  
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const data = {
            recipe: e.target.recipe.value,
            userid: this.props.match.params.id  
        }
    
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        }
    
        fetch(`http://localhost:3000/cheese/${this.state.userid}/dashboard`, options)
            .then(r => r.json())
            // .then(console.log(data))
            .then( a => alert('You have succesfully created your recipe.'))
            // .then(this.setState({recipe: ' '}))
            .catch(console.warn)  
            
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className='addNew-form'>
                    <label>Your Recipe: </label>
                    <textarea className='add-new-text' name ='recipe' onChange={this.handleChange}></textarea>
                    <input className='add-submit' type='submit'/>
                </form>
            </div>
        )
    }
}

export default withRouter(AddNew)


