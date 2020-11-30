export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const GET_USER = 'GET_USER'
export const LOGOUT = 'LOGOUT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const TOKEN_SUCCESS = 'TOKEN_SUCCESS'
export const TOKEN_ERROR = 'TOKEN_ERROR'
export const CLEAN_MESSAGE = 'CLEAN_MESSAGE'

const authReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case CLEAN_MESSAGE:
            return {
                ...state,
                msg: {
                    content: '',
                    category: '',
                },
            }
        case LOGOUT:
            window.localStorage.removeItem('token')

            return {
                ...state,
                token: null,
                user: null,
                authenticated: false,
                msg: {
                    content: '',
                    category: '',
                },
                querying: false,
            }
        case TOKEN_SUCCESS:
            window.localStorage.setItem('token', payload)

            return {
                ...state,
                token: payload,
                msg: {
                    content: '',
                    category: '',
                },
                querying: false,
            }
        case TOKEN_ERROR:
            window.localStorage.removeItem('token')

            return {
                ...state,
                token: null,
                msg: {
                    content: payload,
                    category: 'alerta-error',
                },
                querying: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                user: payload,
                token: window.localStorage.getItem('token'),
                msg: {
                    content: '',
                    category: '',
                },
                querying: false,
            }
        case LOGIN_ERROR:
            window.localStorage.removeItem('token')

            return {
                ...state,
                token: null,
                authenticated: false,
                user: null,
                msg: {
                    content: payload,
                    category: 'alerta-error',
                },
                querying: false,
            }
        case SIGNUP_SUCCESS:
            window.localStorage.setItem('token', payload)

            return {
                ...state,
                token: payload,
                msg: {
                    content: '',
                    category: '',
                },
                querying: false,
            }
        case SIGNUP_ERROR:
            window.localStorage.removeItem('token')

            return {
                ...state,
                token: null,
                authenticated: false,
                user: null,
                msg: {
                    content: payload,
                    category: 'alerta-error',
                },
                querying: false,
            }
        default:
            return state
    }
}

export default authReducer
