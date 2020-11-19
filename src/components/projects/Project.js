import React, { useContext } from 'react'
import { ProjectsContext } from '../../context/projects/context'

const Project = ({ project }) => {
    const { activateProject } = useContext(ProjectsContext)

    const handleClick = () => {
        activateProject(project.id)
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={handleClick}
            >
                {project.name}
            </button>
        </li>
    )
}

export default Project
