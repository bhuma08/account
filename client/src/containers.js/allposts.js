import React, {Component} from 'react';

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
            <h1>Shared Recipe...</h1>

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