import React, {Component} from 'react'
import { withRouter } from "react-router";

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
            // .then(this.props.history.push(`/${this.state.userid}/dashboard`))
            .then( a => alert('You have succesfully created your recipe.'))
            .catch(console.warn)   
            
    }

    // info = ()=>{
    //     return <h1> Success </h1>
    // }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className='addNew-form'>
                    <label>Your Recipe: </label>
                    <textarea id="recipe" name ='recipe' onChange={this.handleChange}></textarea>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default withRouter(AddNew)


