import React, {
    createContext,
    useReducer,
    useEffect,
    useState,
    useCallback,
} from 'react'
import axiosClient from '../config/axios'
import setAxiosClientTokenHeader from '../config/tokenHeader'

import authReducer, {
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    TOKEN_SUCCESS,
    TOKEN_ERROR,
    LOGOUT,
    CLEAN_MESSAGE,
} from '../reducers/auth'

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
        querying: true,
    })

    const { token, authenticated, user, msg, querying } = state
    const [trySignup, setTrySignup] = useState(false)
    const [trySignin, setTrySignin] = useState(false)
    const [tryGetToken, setTryGetToken] = useState(false)
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
                        data: { token: payload },
                    } = response

                    setTrySignup(false)
                    dispatch({ type: SIGNUP_SUCCESS, payload })
                    setUserData(null)
                    setTrySignin(true)
                } catch (error) {
                    dispatch({
                        type: SIGNUP_ERROR,
                        payload: error.response.data.msg,
                    })

                    setTrySignup(false)
                }
            }

            registerInApi()
        }
    }, [trySignup, setTrySignup, userData, setUserData, setTrySignin])

    useEffect(() => {
        if (trySignin) {
            const getUserFromApi = async () => {
                try {
                    setAxiosClientTokenHeader(token)
                    const response = await axiosClient.get('/api/auth')

                    const {
                        data: { user: payload },
                    } = response

                    dispatch({ type: LOGIN_SUCCESS, payload })
                    setTrySignin(false)
                } catch (error) {
                    setAxiosClientTokenHeader()

                    dispatch({
                        type: LOGIN_ERROR,
                        payload: error.response.data.msg,
                    })

                    setTrySignin(false)
                }
            }

            getUserFromApi()
        }
    }, [trySignin, setTrySignin, token])

    useEffect(() => {
        if (tryGetToken) {
            const getTokenFromApi = async () => {
                try {
                    const response = await axiosClient.post(
                        '/api/auth',
                        userData
                    )

                    setTryGetToken(false)

                    const {
                        data: { token: payload },
                    } = response

                    dispatch({ type: TOKEN_SUCCESS, payload })
                    setTrySignin(true)
                } catch (error) {
                    setTryGetToken(false)

                    dispatch({
                        type: TOKEN_ERROR,
                        payload: error.response.data.msg,
                    })
                }
            }

            getTokenFromApi()
        }
    }, [tryGetToken, setTryGetToken, userData])

    const registerUser = useCallback(
        (userData) => {
            setTrySignup(true)
            setUserData(userData)
        },
        [setUserData, setTrySignup]
    )

    const loginUser = useCallback(() => {
        setTrySignin(true)
    }, [setTrySignin])

    const getToken = useCallback(
        (email, password) => {
            setUserData({ email, password })
            setTryGetToken(true)
        },
        [setUserData, setTryGetToken]
    )

    const cleanMessage = () => dispatch({ type: CLEAN_MESSAGE })

    const logout = () => dispatch({ type: LOGOUT })

    return (
        <authContext.Provider
            value={{
                token,
                authenticated,
                user,
                msg,
                registerUser,
                loginUser,
                getToken,
                logout,
                querying,
                cleanMessage,
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider
