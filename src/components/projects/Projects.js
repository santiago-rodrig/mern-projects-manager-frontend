import React, { useContext, useEffect } from 'react'
import Sidebar from '../layout/Sidebar'
import MainBar from '../layout/MainBar'
import TasksForm from '../tasks/TasksForm'
import TasksListing from '../tasks/TasksListing'
import { ProjectsContext } from '../../contexts/projects'
import { TasksContext } from '../../contexts/tasks'
import { authContext } from '../../contexts/auth'

const Projects = () => {
    const { activeProject, removeProject, getProjects } = useContext(
        ProjectsContext
    )

    const { deactivateTasks } = useContext(TasksContext)
    const { authenticated } = useContext(authContext)

    useEffect(() => {
        if (authenticated) {
            getProjects()
        }
    }, [getProjects, authenticated])

    const handleClick = () => {
        deactivateTasks(activeProject._id)
        removeProject(activeProject._id)
    }

    const MainJsx = (
        <main>
            <TasksForm />
            <div className="contenedor-tareas">
                <TasksListing />
                <button
                    type="button"
                    className="btn btn-eliminar"
                    onClick={handleClick}
                >
                    Eliminar Proyecto &times;
                </button>
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
