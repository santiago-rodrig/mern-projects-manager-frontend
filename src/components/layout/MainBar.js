import React, { useContext } from 'react'
import { authContext } from '../../contexts/auth'

const MainBar = () => {
    const { user, logout } = useContext(authContext)

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
