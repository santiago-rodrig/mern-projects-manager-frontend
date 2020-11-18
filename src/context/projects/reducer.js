export const ACTIVATE_NEW_PROJECT = 'ACTIVATE_NEW_PROJECT'
export const DEACTIVATE_NEW_PROJECT = 'DEACTIVATE_NEW_PROJECT'

const projectsReducer = (state, action) => {
    switch (action.type) {
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
        default:
            return state
    }
}

export default projectsReducer
