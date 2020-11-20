import React, { Fragment, useContext } from 'react'
import Task from './Task'
import { ProjectsContext } from '../../context/projects/context'
import { TasksContext } from '../../context/tasks/context'

const TasksListing = () => {
    const { activeProject } = useContext(ProjectsContext)
    const { activeTasks: tasks } = useContext(TasksContext)

    return (
        <Fragment>
            <h2>Proyecto: {activeProject.name}</h2>
            <ul className="listado-tareas">
                {tasks === null || tasks.length === 0 ? (
                    <li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    tasks.map((task) => <Task task={task} key={task.id} />)
                )}
            </ul>
        </Fragment>
    )
}

export default TasksListing
