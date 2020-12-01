import React, { useContext } from 'react'
import { TasksContext } from '../../contexts/tasks'

const Task = ({ task }) => {
    const { removeTask, updateTask, setTaskBeingEdited } = useContext(
        TasksContext
    )

    const handleRemove = () => {
        removeTask(task._id)
    }

    const handleToggle = () => {
        updateTask({ ...task, completed: !task.completed })
    }

    const handleEdit = () => {
        setTaskBeingEdited(task)
    }

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.completed ? (
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
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={handleEdit}
                >
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
