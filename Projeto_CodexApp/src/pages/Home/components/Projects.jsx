import React from "react"
import ListaProjs from "./ListaProjs";

const Projects = ({projeto, handleProjClick , handleProjetoDeletion}) => {
   
    return(
        <>
            {projeto.map((projeto) => (
            <ListaProjs projeto={projeto} handleProjClick={handleProjClick} handleProjetoDeletion={handleProjetoDeletion}/>
            ))}
        </>
    )
};

export default Projects;