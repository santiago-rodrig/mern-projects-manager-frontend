import React, { useContext, useEffect, useState } from 'react'
import Project from './Project'
import { ProjectsContext } from '../../contexts/projects'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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

    let renderedJsx

    if (projects.length === 0 && !fetching) {
        renderedJsx = <p>No tienes proyectos, intenta crear uno.</p>
    } else if (projects.length === 0 && fetching) {
        renderedJsx = <p>Cargando proyectos...</p>
    } else {
        renderedJsx = (
            <ul className="listado-proyectos">
                <TransitionGroup>
                    {projects.map((project) => (
                        <CSSTransition
                            timeout={200}
                            classNames="proyecto"
                            key={project.id}
                        >
                            <Project project={project} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
        )
    }

    return renderedJsx
}

export default Listing
