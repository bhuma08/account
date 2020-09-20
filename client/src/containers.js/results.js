import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import SharePost from './sharepost';


class Results extends Component{

    render(){
 
        return (
            <div>
             
                <h1>My Secret Recipe...</h1>
                {this.props.results.map((item, idx) =>
                    <div key={idx}>
                        <p>{item.recipe}</p>
                        <SharePost recipe={item.recipe}/>
                    </div>) }
            </div>
        )
    }
}
export default withRouter(Results);

