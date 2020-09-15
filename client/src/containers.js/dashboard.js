import React, {useState} from 'react';
import axios from 'axios';
import Results from './results';
import { useParams, Link } from "react-router";
import { withRouter } from "react-router";
import NavBar from '../pages.js/NavBar';



function Dashboard(){
    
    const [ results, setResults ] = useState([])
    let { id } = useParams();


    const handleAxios = () =>{
        axios.get(`http://localhost:3000/cheese/${id}/dashboard`)
        .then(function (response) {
            setResults(response.data.cheese)
        })   
    }



    return(
        <>
        <NavBar id = {`${id}`}/>
        <button onClick={handleAxios}>View my recipe</button>
        <Results results={results}/>
        </>
    )

}


export default withRouter(Dashboard)