import { createContext, useReducer } from 'react'
import projectsReducer, {
    ACTIVATE_NEW_PROJECT,
    DEACTIVATE_NEW_PROJECT,
} from './reducer'

export const ProjectsContext = createContext()

const ProjectsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectsReducer, {
        newProject: false,
        projects: [
            { name: 'Tienda Virtual', id: '1' },
            { name: 'Intranet', id: '2' },
            { name: 'Diseño de Sitio Web', id: '3' },
        ],
    })

    const { newProject, projects } = state

    const activateNewProject = () => {
        dispatch({ type: ACTIVATE_NEW_PROJECT })
    }

    const deactivateNewProject = () => {
        dispatch({ type: DEACTIVATE_NEW_PROJECT })
    }

    return (
        <ProjectsContext.Provider
            value={{
                newProject,
                activateNewProject,
                deactivateNewProject,
                projects,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsProvider
