import React, { useContext, useEffect, useState } from 'react'
import Project from './Project'
import { ProjectsContext } from '../../contexts/projects'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Listing = () => {
    const { projects, setProjects } = useContext(ProjectsContext)
    let renderedJsx

    if (projects.length === 0) {
        renderedJsx = <p>No tienes proyectos, intenta crear uno.</p>
    } else if (projects.length === 0) {
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
