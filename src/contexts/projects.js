import { createContext, useReducer } from 'react'
import axiosClient from '../config/axios'

import projectsReducer, {
    ACTIVATE_PROJECT_FORM,
    DEACTIVATE_PROJECT_FORM,
    SET_PROJECTS,
    ADD_PROJECT,
    ACTIVATE_PROJECT,
    REMOVE_PROJECT,
    POPULATE_PROJECTS,
} from '../reducers/projects'

export const ProjectsContext = createContext()

const ProjectsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectsReducer, {
        newProject: false,
        projects: [],
        activeProject: null,
    })

    const { newProject, projects, activeProject } = state

    const getProjects = async () => {
        try {
            const response = await axiosClient.get('/api/projects')
            const {
                data: { projects: payload },
            } = response

            dispatch({ type: POPULATE_PROJECTS, payload })
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const activateProjectForm = () => {
        dispatch({ type: ACTIVATE_PROJECT_FORM })
    }

    const deactivateProjectForm = () => {
        dispatch({ type: DEACTIVATE_PROJECT_FORM })
    }

    const setProjects = (projects) => {
        dispatch({ type: SET_PROJECTS, payload: projects })
    }

    const addProject = async (project) => {
        try {
            const response = await axiosClient.post('/api/projects', project)

            const {
                data: { project: payload },
            } = response

            dispatch({ type: ADD_PROJECT, payload })
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const activateProject = (projectId) => {
        dispatch({ type: ACTIVATE_PROJECT, payload: projectId })
    }

    const removeProject = (projectId) => {
        dispatch({ type: REMOVE_PROJECT, payload: projectId })
    }

    return (
        <ProjectsContext.Provider
            value={{
                removeProject,
                activateProject,
                activeProject,
                newProject,
                activateProjectForm,
                deactivateProjectForm,
                setProjects,
                projects,
                addProject,
                getProjects,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsProvider
