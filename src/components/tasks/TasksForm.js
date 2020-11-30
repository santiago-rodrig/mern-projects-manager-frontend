import React, { useContext, useState, useEffect, useMemo } from 'react'
import { TasksContext } from '../../contexts/tasks'
import { ProjectsContext } from '../../contexts/projects'

const TasksForm = () => {
    const { activeProject } = useContext(ProjectsContext)
    const { addTask, taskBeingEdited, updateTask } = useContext(TasksContext)

    const taskInitialState = useMemo(
        () => ({
            name: '',
            project: activeProject._id,
            state: false,
        }),
        [activeProject]
    )

    const [task, setTask] = useState(taskInitialState)

    useEffect(() => {
        if (taskBeingEdited) {
            setTask(taskBeingEdited)
        } else {
            setTask(taskInitialState)
        }
    }, [taskBeingEdited, taskInitialState])

    const [invalidTask, setInvalidTask] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (task.name.trim() === '') {
            setInvalidTask(true)

            return
        }

        setInvalidTask(false)

        if (taskBeingEdited) {
            updateTask(task)
        } else {
            addTask(task)
        }

        setTask(taskInitialState)
    }

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="formulario">
            {invalidTask ? (
                <p className="mensaje error mb-4">
                    El nombre de la tarea es inválido
                </p>
            ) : null}
            <form onSubmit={handleSubmit}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Buy Boots"
                        name="name"
                        onChange={handleChange}
                        value={task.name}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={`${
                            taskBeingEdited ? 'Editar' : 'Agregar'
                        } Tarea`}
                    />
                </div>
            </form>
        </div>
    )
}

export default TasksForm
