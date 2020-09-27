import React, {Component} from 'react';
import '../styles/allposts.css'

class AllPosts extends Component {
        
    state = {
        apiInfo: [],
    }
    componentDidMount() {
        fetch('http://localhost:3000/cheese/all')
          .then(data => data.json())
          .then(results => {
            const apiInfo = results.cheese.map(obj => obj.recipe);
            this.setState({apiInfo})
        });
    }

    render(){

        return(
            <>
            <h1 className='head'>Shared Recipe...</h1>

            <div className='shared-recipe'>

                {this.state.apiInfo.map((item, idx) => (
                <textarea className='main main-share' key={idx}>
                    {item}
                </textarea>
                ))}

            </div>
            </>    
        )
    }
}

export default AllPosts