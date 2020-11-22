import React, { useContext, useState, useEffect } from 'react'
import { TasksContext } from '../../context/tasks/context'
import { ProjectsContext } from '../../context/projects/context'

const TasksForm = () => {
    const { activeProject } = useContext(ProjectsContext)
    const { addTask, taskBeingEdited } = useContext(TasksContext)

    const taskInitialState = {
        name: '',
        projectId: activeProject.id,
        state: false,
    }

    const [task, setTask] = useState(taskInitialState)

    useEffect(() => {
        if (taskBeingEdited) {
            setTask(taskBeingEdited)
        } else {
            setTask(taskInitialState)
        }
    }, [taskBeingEdited])

    const [invalidTask, setInvalidTask] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (task.name.trim() === '') {
            setInvalidTask(true)

            return
        }

        setInvalidTask(false)
        addTask(task)
        setTask({
            ...task,
            name: '',
        })
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
