import React, { Fragment } from 'react'

const ProjectForm = () => {
    return (
        <Fragment>
            <button type="button" className="btn btn-block btn-primario">
                Nuevo Proyecto
            </button>
            <form className="formulario-nuevo-proyecto">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Climb the Everest"
                    name="name"
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
