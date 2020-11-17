import React from 'react'

const Task = ({ task }) => (
    <li className="tarea">
        <p>{task.name}</p>
    </li>
)

export default Task
