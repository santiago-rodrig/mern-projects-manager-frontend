import React, { useContext } from 'react'
import { TasksContext } from '../../context/tasks/context'

const Task = ({ task }) => {
    const { removeTask, toggleTaskState } = useContext(TasksContext)

    const handleRemove = () => {
        removeTask(task.id)
    }

    const handleToggle = () => {
        toggleTaskState(task.id)
    }

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.state ? (
                    <button
                        type="button"
                        className="completo"
                        onClick={handleToggle}
                    >
                        Completo
                    </button>
                ) : (
                    <button
                        type="button"
                        className="incompleto"
                        onClick={handleToggle}
                    >
                        Incompleto
                    </button>
                )}
            </div>
            <div className="acciones">
                <button type="button" className="btn btn-primario">
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={handleRemove}
                >
                    Eliminar
                </button>
            </div>
        </li>
    )
}

export default Task
