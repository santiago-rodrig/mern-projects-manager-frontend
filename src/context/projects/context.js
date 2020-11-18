import { createContext, useReducer } from 'react'
import projectsReducer, {
    ACTIVATE_NEW_PROJECT,
    DEACTIVATE_NEW_PROJECT,
} from './reducer'

export const ProjectsContext = createContext()

const ProjectsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectsReducer, {
        newProject: false,
    })

    const { newProject } = state

    const activateNewProject = () => {
        dispatch({ type: ACTIVATE_NEW_PROJECT })
    }

    const deactivateNewProject = () => {
        dispatch({ type: DEACTIVATE_NEW_PROJECT })
    }

    return (
        <ProjectsContext.Provider
            value={{ newProject, activateNewProject, deactivateNewProject }}
        >
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsProvider
