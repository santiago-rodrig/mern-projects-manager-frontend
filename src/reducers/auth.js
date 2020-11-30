export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const GET_USER = 'GET_USER'
export const LOGOUT = 'LOGOUT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

const authReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
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
            }
        case LOGIN_ERROR:
            window.localStorage.removeItem('token')

            return {
                ...state,
                authenticated: false,
                user: null,
                msg: {
                    content: payload,
                    category: 'alerta-error',
                },
            }
        case REGISTER_SUCCESS:
            window.localStorage.setItem('token', payload)

            return {
                ...state,
                token: payload,
                msg: {
                    content: '',
                    category: '',
                },
            }
        case REGISTER_ERROR:
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
            }
        default:
            return state
    }
}

export default authReducer
