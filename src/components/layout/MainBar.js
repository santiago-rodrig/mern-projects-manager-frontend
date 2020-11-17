import React from 'react'

const MainBar = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">
                Hola <span>Santiago</span>
            </p>
            <nav className="nav-principal">
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
    )
}

export default MainBar
