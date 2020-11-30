import React, { useContext, useEffect } from 'react'
import Sidebar from '../layout/Sidebar'
import MainBar from '../layout/MainBar'
import TasksForm from '../tasks/TasksForm'
import TasksListing from '../tasks/TasksListing'
import { ProjectsContext } from '../../contexts/projects'
import { TasksContext } from '../../contexts/tasks'
import { authContext } from '../../contexts/auth'
import { alertsContext } from '../../contexts/alerts'
import { Redirect } from 'react-router-dom'

const Projects = () => {
    const {
        activeProject,
        removeProject,
        getProjects,
        msg,
        clearMessage,
    } = useContext(ProjectsContext)

    const { deactivateTasks } = useContext(TasksContext)
    const { authenticated } = useContext(authContext)
    const { alert, showAlert } = useContext(alertsContext)

    useEffect(() => {
        if (msg.content) {
            showAlert(msg.content, msg.category)
            clearMessage()
        }
    }, [msg, clearMessage])

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
            {alert ? (
                <div className={`alerta ${alert.category}`}>{alert.msg}</div>
            ) : null}
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
