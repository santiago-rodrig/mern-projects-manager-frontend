import React, { useContext, useEffect, useState } from 'react'
import Project from './Project'
import { ProjectsContext } from '../../context/projects/context'

const Listing = () => {
    const { projects, setProjects } = useContext(ProjectsContext)

    const [fetching, setFetching] = useState(true)

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
            setFetching(false)
        }

        if (fetching) {
            queryApi()
        }
    }, [projects, setFetching, fetching, setProjects])

    return (
        <ul className="listado-proyectos">
            {projects.map((project) => (
                <Project project={project} key={project.id} />
            ))}
        </ul>
    )
}

export default Listing
