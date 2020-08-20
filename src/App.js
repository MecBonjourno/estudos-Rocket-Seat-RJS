import React, { useState } from 'react';

import './App.css';
import backgroundImg from './assets/background.jpg'

import Header from './components/Header'

/**
 * Componentes
 * Propriedades
 * Estados e Imutabilidade
 */

function App() {
    const [projects, setProjects] = useState(["Desenvolvimento de app ", "Front-End Web"]);

    //useState retorna array com 2 positions

    function handleAddProject() {

        // projects.push(`Novo Projeto ${Date.now()}`);

        setProjects([...projects, `Novo Projeto${Date.now()}`]);

        console.log(projects);
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
            <img width={400} src={backgroundImg} />
            <ul>
                 {projects.map(project => <li key={project}>{project}</li>)}
            </ul>
        </Header>

        <button type="button" onClick={handleAddProject}> Adicionar Projeto </button>
        </>
    ) 
}

export default App;