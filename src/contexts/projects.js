import { createContext, useReducer } from 'react'
import axiosClient from '../config/axios'

import projectsReducer, {
    ACTIVATE_PROJECT_FORM,
    DEACTIVATE_PROJECT_FORM,
    ADD_PROJECT,
    ACTIVATE_PROJECT,
    REMOVE_PROJECT,
    POPULATE_PROJECTS,
    SET_MESSAGE,
    CLEAR_MESSAGE,
} from '../reducers/projects'

export const ProjectsContext = createContext()

const ProjectsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectsReducer, {
        newProject: false,
        projects: [],
        activeProject: null,
        msg: {
            content: '',
            category: '',
        },
    })

    const { newProject, projects, activeProject, msg } = state

    const getProjects = async () => {
        try {
            const response = await axiosClient.get('/api/projects')
            const {
                data: { projects: payload },
            } = response

            dispatch({ type: POPULATE_PROJECTS, payload })
        } catch (error) {
            dispatch({ type: SET_MESSAGE, payload: error.response.data.msg })
        }
    }

    const activateProjectForm = () => {
        dispatch({ type: ACTIVATE_PROJECT_FORM })
    }

    const deactivateProjectForm = () => {
        dispatch({ type: DEACTIVATE_PROJECT_FORM })
    }

    const addProject = async (project) => {
        try {
            const response = await axiosClient.post('/api/projects', project)

            const {
                data: { project: payload },
            } = response

            dispatch({ type: ADD_PROJECT, payload })
        } catch (error) {
            dispatch({ type: SET_MESSAGE, payload: error.response.data.msg })
        }
    }

    const activateProject = (projectId) => {
        dispatch({ type: ACTIVATE_PROJECT, payload: projectId })
    }

    const removeProject = async (projectId) => {
        try {
            await axiosClient.delete(`/api/projects/${projectId}`)
            dispatch({ type: REMOVE_PROJECT, payload: projectId })
        } catch (error) {
            dispatch({ type: SET_MESSAGE, payload: error.response.data.msg })
        }
    }

    const clearMessage = () => dispatch({ type: CLEAR_MESSAGE })

    return (
        <ProjectsContext.Provider
            value={{
                removeProject,
                activateProject,
                activeProject,
                newProject,
                activateProjectForm,
                deactivateProjectForm,
                projects,
                addProject,
                getProjects,
                clearMessage,
                msg,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsProvider
