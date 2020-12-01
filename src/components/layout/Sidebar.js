import React from 'react'
import ProjectForm from '../projects/ProjectForm'
import ProjectsListing from '../projects/Listing'

const Sidebar = () => (
    <aside>
        <h1>
            MERN<span>Tasks</span>
        </h1>
        <ProjectForm />
        <div className="proyectos">
            <h2>Tus Proyectos</h2>
            <ProjectsListing />
        </div>
    </aside>
)

export default Sidebar
