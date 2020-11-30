import React, { createContext, useReducer, useEffect, useState } from 'react'
import authReducer, { REGISTER_SUCCESS, REGISTER_ERROR } from '../reducers/auth'
import axiosClient from '../config/axios'

export const authContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        token: window.localStorage.getItem('token'),
        authenticated: false,
        user: null,
        msg: '',
    })

    const { token, authenticated, user, msg } = state
    const [trySignup, setTrySignup] = useState(false)
    const [userData, setUserData] = useState()

    useEffect(() => {
        if (trySignup) {
            const registerInApi = async () => {
                try {
                    const response = await axiosClient.post(
                        '/api/users/',
                        userData
                    )

                    const {
                        data: { token },
                    } = response

                    console.log(token)
                    dispatch({ type: REGISTER_SUCCESS })
                    setUserData(null)
                    setTrySignup(false)
                } catch (error) {
                    console.log(error)
                    dispatch({ type: REGISTER_ERROR, payload: error.message })
                    setTrySignup(false)
                }
            }

            registerInApi()
        }
    }, [trySignup, setTrySignup, userData, setUserData])

    const registerUser = (userData) => {
        setTrySignup(true)
        setUserData(userData)
    }

    return (
        <authContext.Provider
            value={{ token, authenticated, user, msg, registerUser }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider
