import React, { Component } from 'react';
import axios from 'axios'


class Dashboard extends Component {

    doThis = () =>{
    

        fetch(`http://localhost:3000/cheese/${this.props.id}/dashboard`)
            .then(r => r.json())
            .then(data=>{
                    console.log(data)
                  
                }
          
            ).catch(err => alert('No recipe!'))


    }


    render(){
        return(
            <div>
                {this.doThis()}

            </div>
        )
    }
}

export default Dashboard;