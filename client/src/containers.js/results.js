import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import SharePost from './sharepost';
import '../styles/results.css'


class Results extends Component{

    render(){
 
        return (
            <div className='results'>
             
                <h1 className='heading'>My Secret Recipe...</h1>
                {this.props.results.map((item, idx) =>
                    <div className='recipe' key={idx}>
                        <textarea className='main'>{item.recipe}</textarea>
                        <SharePost recipe={item.recipe}/>
                    </div>) }
            </div>
        )
    }
}
export default withRouter(Results);

