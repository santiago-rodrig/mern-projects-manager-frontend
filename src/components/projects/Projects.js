import React from 'react'
import Sidebar from '../layout/Sidebar'

const Projects = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="contenedor-principal">
                <main>
                    <div className="contenedor-tareas"></div>
                </main>
            </div>
        </div>
    )
}

export default Projects
