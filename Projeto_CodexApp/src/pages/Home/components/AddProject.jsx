import React, { useState } from 'react';
import "../components/AddProject.css"
import Button from './Button';

const AddProject = ({handleProjetoAddition}) => {
     const [inputData,setInputData] = useState('');

    const handleInputChange = (e) => {
          setInputData(e.target.value);
     };

     const handleAddProjetoClick = () => {
          handleProjetoAddition(inputData)
          setInputData("");
     };

    return ( 
          <div className="add-projeto-container">
               <input
                    onChange={handleInputChange}
                    value = {inputData}
                    className='add-projeto-input' 
                    type="text"
               /> 
               <div className="add-projeto-button-container">
                    <Button onClick={handleAddProjetoClick}>Adicionar projeto</Button>
               </div>
              
          </div>
     );
}
 
export default AddProject;