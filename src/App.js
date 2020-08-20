import React, { useState, useEffect } from 'react';

import api from './services/api';

import './App.css';


import Header from './components/Header'

/**
 * Componentes
 * Propriedades
 * Estados e Imutabilidade
 */

function App() {
    const [projects, setProjects] = useState([]);

    useEffect( () => {
        api.get('/repositories').then(response => {
            setProjects(response.data)
        })
    }, [])

    //useState retorna array com 2 positions

    async function handleAddProject() {

        // projects.push(`Novo Projeto ${Date.now()}`);

        // setProjects([...projects, `Novo Projeto${Date.now()}`]);

      const response = await api.post('/repositories', {
            title: `Novo Projeto${Date.now()}`,
            url: "Zago"
         })

         const project = response.data

         setProjects([...projects, project]);

        // console.log(projects);
    }

    return (
        <>
        <Header title="Props are Awesome">
            <ul>
                <li>Zago</li>
                <li>is</li>
                <li>Dope</li>
            </ul>
        </Header>
        <Header title="Ok, not so much">
            <ul>
                <li>Keep</li>
                <li>Looking</li>
                <li>Forward</li>
            </ul>
        </Header>
        <Header title="Projects">
            
            <ul>
                 {projects.map(project => <div key={project.id}>
                    <h1>{project.title}</h1> 
                    <h3>{project.url}</h3>
                     </div>
                 
                )}
            </ul>
        </Header>

        <button type="button" onClick={handleAddProject}> Adicionar Projeto </button>
        </>
    ) 
}

export default App;