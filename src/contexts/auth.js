import React, {
    createContext,
    useReducer,
    useEffect,
    useState,
    useContext,
} from 'react'

import authReducer, { REGISTER_SUCCESS, REGISTER_ERROR } from '../reducers/auth'
import axiosClient from '../config/axios'

export const authContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        token: window.localStorage.getItem('token'),
        authenticated: false,
        user: null,
        msg: {
            content: '',
            category: '',
        },
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

                    dispatch({ type: REGISTER_SUCCESS, payload: token })
                    setUserData(null)
                    setTrySignup(false)
                } catch (error) {
                    dispatch({
                        type: REGISTER_ERROR,
                        payload: error.response.data.msg,
                    })

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
