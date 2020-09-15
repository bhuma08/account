import React, { Component } from 'react';
import Results from './results'



class Dash extends Component {

    state = {
        postID: this.props.match.params.id,
        recipe: [],
        loading: false
    }

    async componentDidMount(){
        const url = `http://localhost:3000/cheese/${this.state.postID}/dashboard`;
        const response = await fetch(url)
        const data = await response.json();
        this.setState({ recipe: data.cheese })
        this.setState({ loading: true })
        console.log(this.state.recipe)

     
    }

    


    render(){

        const renderResults = this.state.recipe.length !==0 ? this.state.recipe.map((item, idx)=>{
            <div key ={idx}>
                <p>{item.recipe}</p>
                {console.log(item.recipe)}
            </div>
        }) :
        <h1></h1>

        return(
            <div>
                {this.state.loading ? renderResults: 'failure'}
            
            </div>
        )
    }
}

export default Dash;