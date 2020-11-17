import React, { Fragment, useState } from 'react'

const ProjectForm = () => {
    const [project, setPoject] = useState({
        name: '',
    })

    const { name } = project

    const handleChange = (e) => {
        setPoject({
            ...project,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-block btn-primario">
                Nuevo Proyecto
            </button>
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
        </Fragment>
    )
}

export default ProjectForm
