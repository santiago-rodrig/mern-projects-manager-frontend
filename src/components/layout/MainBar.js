import React, { useContext, useEffect } from 'react'
import { authContext } from '../../contexts/auth'

const MainBar = () => {
    const { user, loginUser, logout } = useContext(authContext)

    useEffect(() => {
        loginUser()
    }, [])

    return (
        <header className="app-header">
            {user ? (
                <p className="nombre-usuario">
                    Hola <span>{user.name}</span>
                </p>
            ) : null}

            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    type="button"
                    onClick={() => logout()}
                >
                    Logout
                </button>
            </nav>
        </header>
    )
}

export default MainBar
