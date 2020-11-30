import React, { createContext, useReducer } from 'react'
import authReducer from '../reducers/auth'
const authContext = createContext()
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        token: window.localStorage.getItem('token'),
        authenticated: false,
        user: null,
        msg: '',
    })
    const { token, authenticated, user, msg } = state
    return (
        <authContext.Provider value={{ token, authenticated, user, msg }}>
            {children}
        </authContext.Provider>
    )
}
export default AuthContextProvider
