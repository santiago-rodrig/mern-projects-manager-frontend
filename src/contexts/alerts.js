import { createContext, useReducer } from 'react'
import alertsReducer, { SHOW_ALERT, HIDE_ALERT } from '../reducers/alerts'
const alertsContext = createContext()
const AlertsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(alertsReducer, {
        alert: null,
    })
    const showAlert = (msg, category) => {
        dispatch({ type: SHOW_ALERT, payload: { msg, category } })
        window.setTimeout(() => {
            dispatch({ type: HIDE_ALERT })
        }, 5000)
    }
    return (
        <alertsContext.Provider value={{ alert: state.alert, showAlert }}>
            {children}
        </alertsContext.Provider>
    )
}
export { alertsContext }
export default AlertsContextProvider
