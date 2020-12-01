export const ACTIVATE_PROJECT_FORM = 'ACTIVATE_PROJECT_FORM'
export const DEACTIVATE_PROJECT_FORM = 'DEACTIVATE_PROJECT_FORM'
export const ADD_PROJECT = 'ADD_PROJECT'
export const ACTIVATE_PROJECT = 'ACTIVATE_PROJECT'
export const REMOVE_PROJECT = 'REMOVE_PROJECT'
export const POPULATE_PROJECTS = 'POPULATE_PROJECTS'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
export const SET_MESSAGE = 'SET_MESSAGE'

const projectsReducer = (state, action) => {
    const { type, payload } = action
    const { projects } = state

    switch (type) {
        case CLEAR_MESSAGE:
            return {
                ...state,
                msg: {
                    content: '',
                    category: '',
                },
            }
        case SET_MESSAGE:
            return {
                ...state,
                msg: payload,
            }
        case ACTIVATE_PROJECT_FORM:
            return {
                ...state,
                newProject: true,
            }
        case DEACTIVATE_PROJECT_FORM:
            return {
                ...state,
                newProject: false,
            }
        case POPULATE_PROJECTS:
            return {
                ...state,
                projects: payload,
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...projects, payload],
            }
        case ACTIVATE_PROJECT:
            return {
                ...state,
                activeProject: projects.find((p) => p._id === payload),
            }
        case REMOVE_PROJECT:
            return {
                ...state,
                projects: projects.filter((p) => p._id !== payload),
                activeProject: null,
            }
        default:
            return state
    }
}

export default projectsReducer
