import React, { Fragment, useContext } from 'react'
import Task from './Task'
import { ProjectsContext } from '../../context/projects/context'

const TasksListing = () => {
    const tasks = [
        { name: 'Buy Boots', state: false, id: '1' },
        { name: 'Buy Pickaxe', state: false, id: '2' },
        { name: 'Buy Gloves', state: false, id: '3' },
        { name: 'Buy Coat', state: false, id: '4' },
    ]

    const { activeProject } = useContext(ProjectsContext)

    let renderedJsx

    if (activeProject) {
        renderedJsx = (
            <Fragment>
                <h2>Proyecto: {activeProject.name}</h2>
                <ul className="listado-tareas">
                    {tasks.length === 0 ? (
                        <li className="tarea">
                            <p>No hay tareas</p>
                        </li>
                    ) : (
                        tasks.map((task) => <Task task={task} key={task.id} />)
                    )}
                </ul>
                <button type="button" className="btn btn-eliminar">
                    Eliminar Proyecto &times;
                </button>
            </Fragment>
        )
    } else {
        renderedJsx = <h2>Seleccione un Proyecto</h2>
    }

    return renderedJsx
}

export default TasksListing
