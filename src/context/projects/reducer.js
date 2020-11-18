export const ACTIVATE_NEW_PROJECT = 'ACTIVATE_NEW_PROJECT'
export const DEACTIVATE_NEW_PROJECT = 'DEACTIVATE_NEW_PROJECT'
export const SET_PROJECTS = 'SET_PROJECTS'
export const ADD_PROJECT = 'ADD_PROJECT'

const projectsReducer = (state, action) => {
    const { type, payload } = action
    const { projects } = state

    switch (type) {
        case ACTIVATE_NEW_PROJECT:
            return {
                ...state,
                newProject: true,
            }
        case DEACTIVATE_NEW_PROJECT:
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
        default:
            return state
    }
}

export default projectsReducer
