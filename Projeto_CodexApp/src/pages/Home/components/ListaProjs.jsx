
import React from 'react';
import '../components/Project.css';
import {CgClose, CgInfo} from 'react-icons/cg'


const ListaProjs = ({projeto, handleProjClick,handleProjetoDeletion}) => {

 

    return ( 
        <div 
        className="projeto-container"
        style={projeto.completed ? {borderLeft: "6px solid #28e0c8"} :{} }
        >
           <div className='projeto-title' onClick={() => handleProjClick(projeto.id)}>
                {projeto.title}
           </div>

           <div className='buttons-container'>
                <button 
                    className="remove-projeto-button" 
                    onClick={() => handleProjetoDeletion(projeto.id)}>
                     <CgClose/>
                </button>
           </div>

        </div>
       
    );
}
 
export default ListaProjs;