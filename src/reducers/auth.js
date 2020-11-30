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
        case REGISTER_SUCCESS:
            return {
                ...state,
                authenticated: true,
                msg: '',
            }
        case REGISTER_ERROR:
            return {
                ...state,
                token: null,
                authenticated: false,
                user: null,
                msg: payload,
            }
        default:
            return state
    }
}

export default authReducer
