import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { alertsContext } from '../../contexts/alerts'
const Signup = () => {
    const { alert, showAlert } = useContext(alertsContext)
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        passwordConfirmation: '',
    })
    const { email, password, name, passwordConfirmation } = user
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            email.trim() === '' ||
            password.trim() === '' ||
            name.trim() === '' ||
            passwordConfirmation.trim() === ''
        ) {
            showAlert('Todos los campos son obligatorios', 'alerta-error')
        }
    }
    return (
        <div className="form-usuario">
            {alert ? (
                <div className={`alerta ${alert.category}`}>{alert.msg}</div>
            ) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una Cuenta</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Smith"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
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
                        <label htmlFor="passwordConfirmation">
                            Confirmación de la contraseña
                        </label>
                        <input
                            type="password"
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            value={passwordConfirmation}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarse"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    )
}
export default Signup
