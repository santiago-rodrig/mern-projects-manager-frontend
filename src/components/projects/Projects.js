import React, { useContext } from 'react'
import Sidebar from '../layout/Sidebar'
import MainBar from '../layout/MainBar'
import TasksForm from '../tasks/TasksForm'
import TasksListing from '../tasks/TasksListing'
import { ProjectsContext } from '../../context/projects/context'

const Projects = () => {
    const { activeProject } = useContext(ProjectsContext)

    const MainJsx = (
        <main>
            <TasksForm />
            <div className="contenedor-tareas">
                <TasksListing />
            </div>
        </main>
    )

    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="contenedor-principal">
                <MainBar />
                {activeProject ? (
                    MainJsx
                ) : (
                    <h2 className="mt-4">Seleccione un Proyecto</h2>
                )}
            </div>
        </div>
    )
}

export default Projects
