import React from 'react'
import Sidebar from '../layout/Sidebar'
import MainBar from '../layout/MainBar'

const Projects = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="contenedor-principal">
                <MainBar />
                <main>
                    <div className="contenedor-tareas"></div>
                </main>
            </div>
        </div>
    )
}

export default Projects
