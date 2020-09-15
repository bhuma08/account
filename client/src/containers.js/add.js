import React, {useState} from 'react'
import { Redirect, withRouter } from "react-router";
import { useParams } from "react-router";
import axios from 'axios';


// class AddNew extends Component {
//     state = {
//         recipe : '',
//         id: this.props.match.params.id,
//     }

//     handleChange = e => {
//         this.setState({ recipe: e.target.recipe.value })
       
//     }

//     handleSubmit = e => {
//         e.preventDefault();
        
//         const data = {
//             recipe: e.target.recipe.value,
          
//         }
    
//         const options = {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {"Content-Type": "application/json"}
//         }
    
//         fetch(`http://localhost:3000/cheese/${this.state.id}/dashboard`, options)
//             .then(r => r.json())
//             .then(console.log(data))
//             .then(this.props.history.push(`/habits`))
//             .catch(console.warn) 
             
//     }


//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.handleSubmit} className='addNew-form'>
//                     <label>Your Recipe: </label>
//                     <input type='text' id="recipe" name ='recipe' onChange={this.handleChange}></input>
//                     <input type='submit'/>
//                 </form>
//             </div>
//         )
//     }
// }

function AddNew (){

    const [ results, setResults] = useState("")
    const [ trueOrFalse, setToggle ] = useState(1)
    let { id } = useParams();


    const handleChange = e =>{
        setResults( e.target.value )
    }

    const handleSubmit = e =>{
        e.preventDefault()
        
        axios.post(`http://localhost:3000/cheese/${id}/dashboard`, results)
        .then(response=>{
            console.log(response)
        }).catch(error=> {
            console.log(error)
        })
        
        setToggle(0)


        // axios({
        //     url: `http://localhost:3000/cheese/${id}/dashboard`,
        //     headers: {
        //         'content-type': "application/json ",
        //         'Access-Control-Allow-Origin': '*',
        //     },
        //     method: 'POST',
        //     body: JSON.stringify(results)
        // });

    }


    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={results}></input>
        <input type='submit'></input>
        </form>
        {trueOrFalse == 0 ? <Redirect to={`/${id}/dashboard`}/>: null}
        </>
    )
       
    
}

export default withRouter(AddNew)


