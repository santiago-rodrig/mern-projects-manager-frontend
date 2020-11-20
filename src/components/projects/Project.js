import React, { useContext } from 'react'
import { ProjectsContext } from '../../context/projects/context'
import { TasksContext } from '../../context/tasks/context'

const Project = ({ project }) => {
    const { activateProject } = useContext(ProjectsContext)
    const { activateTasks } = useContext(TasksContext)

    const handleClick = () => {
        activateProject(project.id)
        activateTasks(project.id)
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
