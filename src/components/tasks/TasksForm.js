import React, { useContext } from 'react'
import { ProjectsContext } from '../../context/projects/context'

const TasksForm = () => {
    const { activeProject } = useContext(ProjectsContext)

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Buy Boots"
                        name="name"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    )
}

export default TasksForm
