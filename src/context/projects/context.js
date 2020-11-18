import { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import projectsReducer, {
    ACTIVATE_NEW_PROJECT,
    DEACTIVATE_NEW_PROJECT,
    SET_PROJECTS,
    ADD_PROJECT,
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

    const addProject = (project) => {
        const payload = { ...project, id: uuidv4() }

        dispatch({ type: ADD_PROJECT, payload })
    }

    return (
        <ProjectsContext.Provider
            value={{
                newProject,
                activateNewProject,
                deactivateNewProject,
                setProjects,
                projects,
                addProject,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsProvider
