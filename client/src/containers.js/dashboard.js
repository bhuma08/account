import React, {useState} from 'react';
import axios from 'axios';
import Results from './results';
import { useParams, Link } from "react-router";
import { withRouter } from "react-router";
import Modal from 'react-modal';
import AddNew from './add'
import AllPosts from './allposts';

Modal.setAppElement('#root')

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

function Dashboard(){
    
    const [ results, setResults ] = useState([])
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [modalIsOpenForAddNew, setModalIsOpenForAddNew] = useState(false)
    const [modalSharing, setModalSharing] = useState(false)
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

    const setModalIsOpenToTrue =()=>{
        setModalIsOpenForAddNew(true)
    }

    const setModalIsOpenToFalseForAddNew =()=>{
        setModalIsOpenForAddNew(false)
    }

    const setModalShareTrue =()=>{
        setModalSharing(true)
    }
    const setModalShareFalse =()=>{
        setModalSharing(false)
    }

    return(
        <>
        {/* <NavBar id = {`${id}`}/> */}

        <button onClick={handleAxios}>My Secret Recipe</button>
        <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={true} onRequestClose={()=> setModalIsOpen(false)}>
            <Results results={results}/>
            <button onClick={setModalIsOpenToFalse}>Close</button>
        </Modal>

        <button onClick={setModalIsOpenToTrue}>Create New Recipe</button>
        <Modal isOpen={modalIsOpenForAddNew} shouldCloseOnOverlayClick={true} onRequestClose={()=> setModalIsOpenForAddNew(false)} style={customStyles}>
            <AddNew/>
            <button onClick={setModalIsOpenToFalseForAddNew}>Close</button>
        </Modal>

        <button onClick={setModalShareTrue}>All Shared Recipe</button>
        <Modal isOpen={modalSharing} shouldCloseOnOverlayClick={true} onRequestClose={()=> setModalSharing(false)}>
            <AllPosts/>
            <button onClick={setModalShareFalse}>Close</button>
        </Modal>
        </>
    )
}

export default withRouter(Dashboard)