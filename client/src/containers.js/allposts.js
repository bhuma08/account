import React, {Component} from 'react';
import results from './results';


class AllPosts extends Component {
        

    state = {
        apiInfo: []
    }
    componentDidMount() {
        fetch('http://localhost:3000/cheese/all')
          .then(data => data.json())
          .then(results => {
            const apiInfo = results.cheese.map(obj => obj.recipe);
            // update the state for next render
            this.setState({apiInfo})
        });
    }

    // async componentDidMount(){
    //     const url = `http://localhost:3000/cheese/all`;
    //     const response = await fetch(url)
    //     const data = await response.json();
    //     console.log(data.cheese)
    //     this.setState({ 
    //         results: data.cheese.map(item =>({
    //         recipe: item.recipe
    //     })) 
    //     })
    //     console.log(this.state.results)
     
    // }
    // componentDidMount() {
    //     fetch(`http://localhost:3000/cheese/all`)
    //         .then(response => {
    //         return response.json();
    //         })
    //         .then((data) => {
    //             this.setState({
    //             results: data.cheese.map(item => ({
    //                 recipe: item.recipe,
    //             }))
    //         });

    //         console.log(this.state.results)   
    //         })
    // }

    // renderResults= ()=> this.state.results.map((item, idx)=>{
    //     <div key={idx}>
    //         {item.recipe}
    //     </div>
    // })

    render(){
        {console.log(this.state.apiInfo)}

        return(
            <>
           
                {this.state.apiInfo.map((item, idx) => (
                <p key={idx}>
                    {item}
                </p>
                ))}
            </>
            
        )
    }
}

export default AllPosts