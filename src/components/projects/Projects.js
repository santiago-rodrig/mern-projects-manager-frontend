import React from 'react'
import Sidebar from '../layout/Sidebar'
import MainBar from '../layout/MainBar'
import TasksForm from '../tasks/TasksForm'

const Projects = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="contenedor-principal">
                <MainBar />
                <main>
                    <TasksForm />
                    <div className="contenedor-tareas"></div>
                </main>
            </div>
        </div>
    )
}

export default Projects
