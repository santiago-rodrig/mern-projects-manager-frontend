import React, { useContext, useEffect } from 'react'
import { authContext } from '../../contexts/auth'

const MainBar = () => {
    const { user, loginUser } = useContext(authContext)

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
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
    )
}

export default MainBar
