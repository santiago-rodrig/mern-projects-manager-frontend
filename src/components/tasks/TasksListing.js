import React, { Fragment } from 'react'
import Task from './Task'

const TasksListing = () => {
    const tasks = [
        { name: 'Buy Boots', state: false, id: '1' },
        { name: 'Buy Pickaxe', state: false, id: '2' },
        { name: 'Buy Gloves', state: false, id: '3' },
        { name: 'Buy Coat', state: false, id: '4' },
    ]

    return (
        <Fragment>
            <h2>Proyecto: Escalar el Everest</h2>
            <ul className="listado-tareas">
                {tasks.length === 0 ? (
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
