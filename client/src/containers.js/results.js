import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'


class Results extends Component{



    render(){
 
        const allData = this.props.results.map((item, idx) =>
            <div key={idx}>
                <p>{item.recipe}</p>
                
            </div>) 

        return (
            <div>
                {allData} 
            </div>
        )
    }
}
export default withRouter(Results);

