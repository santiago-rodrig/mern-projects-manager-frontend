import React, { useContext, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { authContext } from '../../contexts/auth'

const SecureRoute = ({ component: Component, ...props }) => {
    const { loginUser, authenticated } = useContext(authContext)

    useEffect(() => {
        loginUser()
    }, [loginUser])

    return (
        <Route {...props}>
            {authenticated ? <Component {...props} /> : <Redirect to="/" />}
        </Route>
    )
}

export default SecureRoute
