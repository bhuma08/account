import React, {useState} from 'react';
import axios from 'axios';
import Results from './results';
import { useParams, Link } from "react-router";
import { withRouter } from "react-router";
import NavBar from '../pages.js/NavBar';
import Modal from 'react-modal';

Modal.setAppElement('#root')



function Dashboard(){
    
    const [ results, setResults ] = useState([])
    const [modalIsOpen,setModalIsOpen] = useState(false);
    let { id } = useParams();


    const handleAxios = () =>{
    
        axios.get(`http://localhost:3000/cheese/${id}/dashboard`)
        .then(function (response) {
            setResults(response.data.cheese)
        })   

        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }



    return(
        <>
        <NavBar id = {`${id}`}/>
        <button onClick={handleAxios}>View my recipe</button>
        <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={true} onRequestClose={()=> setModalIsOpen(false)}>
        <Results results={results}/>
        <button onClick={setModalIsOpenToFalse}>Close</button>
        </Modal>
        </>
    )

}


export default withRouter(Dashboard)