import { createContext, useReducer } from 'react'
import projectsReducer from './reducer'

export const ProjectsContext = createContext()

const ProjectsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectsReducer, {
        newProject: false,
    })

    const { newProject } = state

    return (
        <ProjectsContext.Provider value={{ newProject }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsProvider
