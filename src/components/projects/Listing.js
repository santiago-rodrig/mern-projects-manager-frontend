import React, { useContext, useEffect } from 'react'
import Project from './Project'
import { ProjectsContext } from '../../context/projects/context'

const Listing = () => {
    const { projects, setProjects } = useContext(ProjectsContext)

    useEffect(() => {
        const fetchProjects = new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve([
                        { id: '1', name: 'Climb the Everest' },
                        { id: '2', name: 'Visit Japan' },
                        { id: '3', name: 'Paint the Car' },
                    ]),
                2000
            )
        })

        const queryApi = async () => {
            const payload = await fetchProjects

            setProjects(payload)
        }

        queryApi()
    }, [])

    return (
        <ul className="listado-proyectos">
            {projects.map((project) => (
                <Project project={project} key={project.id} />
            ))}
        </ul>
    )
}

export default Listing
