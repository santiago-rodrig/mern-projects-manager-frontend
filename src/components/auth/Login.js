import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../contexts/auth'
import { alertsContext } from '../../contexts/alerts'
import { Redirect } from 'react-router-dom'

const Login = () => {
    const { msg, getToken, cleanMessage, authenticated } = useContext(
        authContext
    )
    const { showAlert, alert } = useContext(alertsContext)

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { email, password } = user

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alerta-error')

            return
        }

        getToken(email, password)
    }

    useEffect(() => {
        if (msg.content) {
            showAlert(msg.content, msg.category)
            cleanMessage()
        }
    }, [msg, showAlert])

    if (authenticated) return <Redirect to="/projects" />

    return (
        <div className="form-usuario">
            {alert ? (
                <div className={`alerta ${alert.category}`}>{alert.msg}</div>
            ) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john.smith@example.net"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>
                <Link to={'/signup'} className="enlace-cuenta">
                    Registrarse
                </Link>
            </div>
        </div>
    )
}

export default Login
