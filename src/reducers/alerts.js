export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'
const alertsReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: payload,
            }
        case HIDE_ALERT:
            return {
                ...state,
                alert: null,
            }
        default:
            return state
    }
}
export default alertsReducer
