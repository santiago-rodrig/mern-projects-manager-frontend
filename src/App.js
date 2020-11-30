import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Projects from './components/projects/Projects'
import ProjectsProvider from './contexts/projects'
import TasksProvider from './contexts/tasks'
import AlertsContextProvider from './contexts/alerts'
import AuthContextProvider from './contexts/auth'
import SecureRoute from './components/auth/SecureRoute'

function App() {
    return (
        <AuthContextProvider>
            <AlertsContextProvider>
                <ProjectsProvider>
                    <TasksProvider>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Login} />
                                <Route
                                    exact
                                    path="/signup"
                                    component={Signup}
                                />
                                <SecureRoute
                                    exact
                                    path="/projects"
                                    component={Projects}
                                />
                            </Switch>
                        </Router>
                    </TasksProvider>
                </ProjectsProvider>
            </AlertsContextProvider>
        </AuthContextProvider>
    )
}

export default App
