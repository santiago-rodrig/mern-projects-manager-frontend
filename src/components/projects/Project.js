import React, { useContext } from 'react'
import { ProjectsContext } from '../../contexts/projects'
import { TasksContext } from '../../contexts/tasks'

const Project = ({ project }) => {
    const { activateProject } = useContext(ProjectsContext)
    const { activateTasks } = useContext(TasksContext)

    const handleClick = () => {
        activateProject(project._id)
        activateTasks(project._id)
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
