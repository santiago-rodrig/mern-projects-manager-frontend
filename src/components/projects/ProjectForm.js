import React, { Fragment, useState, useContext } from 'react'
import { ProjectsContext } from '../../context/projects/context'

const ProjectForm = () => {
    const {
        newProject,
        activateNewProject,
        addProject,
        deactivateNewProject,
    } = useContext(ProjectsContext)

    const [project, setProject] = useState({
        name: '',
    })

    const [invalidProject, setInvalidProject] = useState(false)

    const { name } = project

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name.trim() === '') {
            setInvalidProject(true)

            return
        }

        setInvalidProject(false)
        addProject(project)
        setProject({ ...project, name: '' })
        deactivateNewProject()
    }

    const handleClick = () => {
        activateNewProject()
    }

    const formJsx = (
        <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
            <input
                type="text"
                className="input-text"
                placeholder="Climb the Everest"
                name="name"
                value={name}
                onChange={handleChange}
            />
            <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar Proyecto"
            />
        </form>
    )

    const invalidProjectJsx = (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
    )

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={handleClick}
            >
                Nuevo Proyecto
            </button>
            {newProject ? formJsx : null}
            {invalidProject ? invalidProjectJsx : null}
        </Fragment>
    )
}

export default ProjectForm
