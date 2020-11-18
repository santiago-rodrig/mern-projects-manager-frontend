export const ACTIVATE_PROJECT_FORM = 'ACTIVATE_PROJECT_FORM'
export const DEACTIVATE_PROJECT_FORM = 'DEACTIVATE_PROJECT_FORM'
export const SET_PROJECTS = 'SET_PROJECTS'
export const ADD_PROJECT = 'ADD_PROJECT'
export const ACTIVATE_PROJECT = 'ACTIVATE_PROJECT'

const projectsReducer = (state, action) => {
    const { type, payload } = action
    const { projects } = state

    switch (type) {
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
        case SET_PROJECTS:
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
                activeProject: projects.find((p) => p.id === payload),
            }
        default:
            return state
    }
}

export default projectsReducer
