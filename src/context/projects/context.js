import { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import projectsReducer, {
    ACTIVATE_PROJECT_FORM,
    DEACTIVATE_PROJECT_FORM,
    SET_PROJECTS,
    ADD_PROJECT,
    ACTIVATE_PROJECT,
} from './reducer'

export const ProjectsContext = createContext()

const ProjectsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectsReducer, {
        newProject: false,
        projects: [],
        activeProject: null,
    })

    const { newProject, projects, activeProject } = state

    const activateProjectForm = () => {
        dispatch({ type: ACTIVATE_PROJECT_FORM })
    }

    const deactivateProjectForm = () => {
        dispatch({ type: DEACTIVATE_PROJECT_FORM })
    }

    const setProjects = (projects) => {
        dispatch({ type: SET_PROJECTS, payload: projects })
    }

    const addProject = (project) => {
        const payload = { ...project, id: uuidv4() }

        dispatch({ type: ADD_PROJECT, payload })
    }

    const activateProject = (projectId) => {
        dispatch({ type: ACTIVATE_PROJECT, payload: projectId })
    }

    return (
        <ProjectsContext.Provider
            value={{
                activateProject,
                activeProject,
                newProject,
                activateProjectForm,
                deactivateProjectForm,
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
