export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const GET_USER = 'GET_USER'
export const LOGOUT = 'LOGOUT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
const authReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        default:
            return state
    }
}
export default authReducer
