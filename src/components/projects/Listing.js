import React, { useContext } from 'react'
import Project from './Project'
import { ProjectsContext } from '../../context/projects/context'

const Listing = () => {
    const { projects } = useContext(ProjectsContext)

    return (
        <ul className="listado-proyectos">
            {projects.map((project) => (
                <Project project={project} key={project.id} />
            ))}
        </ul>
    )
}

export default Listing
