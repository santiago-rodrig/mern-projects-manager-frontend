import React from 'react'
import Project from './Project'

const Listing = () => {
    const projects = [
        { name: 'Tienda Virtual', id: '1' },
        { name: 'Intranet', id: '2' },
        { name: 'Diseño de Sitio Web', id: '3' },
    ]

    return (
        <ul className="listado-proyectos">
            {projects.map((project) => (
                <Project project={project} key={project.id} />
            ))}
        </ul>
    )
}

export default Listing
