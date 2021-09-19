import React, { useState } from "react"
import "../Home/styles.css"
import AddProject from "./components/AddProject";
import Projects from "./components/Projects"
import { v4 as uuidv4 } from 'uuid';
import Header from './components/heade';


const Home = () => {
    
    const [projeto, setProjeto] = useState([
        {
            id:"1",
            title: "Estudar Programação",
            completed: false,
        },
        {
            id: "2",
            title: "Ler Livro",
            completed: true,
        },
    ]);

    const handleProjClick = (projetoId) => {
        const newProjeto = projeto.map(projeto => {
            if (projeto.id === projetoId) return {...projeto,completed: !projeto.completed}
            return projeto;
        })
        setProjeto(newProjeto);
    }

    const handleProjetoAddition= (projetoTitle) => {
        const newProjeto = [...projeto, {
            title: projetoTitle,
            id: uuidv4(),
            completed: false,

        }];
        setProjeto(newProjeto)
    };

    const handleProjetoDeletion = (projetoId) => {
        const newProjeto = projeto.filter(projeto => projeto.id !== projetoId);
        setProjeto(newProjeto);
    }
        
    return (
        <>
           <header>
           <div className="containerheader"></div>
           </header>
            <main>
                <div className="container">
                   <h1 styles ={{color: '#28e0c8'}}>Dados do usuário</h1>
                </div>

                <div className="container2">
                    <Header/>
                    <AddProject 
                      handleProjetoAddition= {handleProjetoAddition} 
                    />
                    <Projects 
                        projeto={projeto}
                        handleProjClick={handleProjClick} 
                        handleProjetoDeletion ={handleProjetoDeletion}
                    />
                </div>
                
            </main>
            <footer>
                <div className='containerfooter'></div>
            </footer>
        </>
    );
}
 
export default Home;