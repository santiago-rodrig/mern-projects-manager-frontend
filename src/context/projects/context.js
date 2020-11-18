import { createContext, useReducer } from 'react'
import projectsReducer, {
    ACTIVATE_NEW_PROJECT,
    DEACTIVATE_NEW_PROJECT,
    SET_PROJECTS,
} from './reducer'

export const ProjectsContext = createContext()

const ProjectsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectsReducer, {
        newProject: false,
        projects: [],
    })

    const { newProject, projects } = state

    const activateNewProject = () => {
        dispatch({ type: ACTIVATE_NEW_PROJECT })
    }

    const deactivateNewProject = () => {
        dispatch({ type: DEACTIVATE_NEW_PROJECT })
    }

    const setProjects = (projects) => {
        dispatch({ type: SET_PROJECTS, payload: projects })
    }

    return (
        <ProjectsContext.Provider
            value={{
                newProject,
                activateNewProject,
                deactivateNewProject,
                setProjects,
                projects,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsProvider
