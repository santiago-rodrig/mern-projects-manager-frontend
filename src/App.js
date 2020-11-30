import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Projects from './components/projects/Projects'
import ProjectsProvider from './contexts/projects'
import TasksProvider from './contexts/tasks'

function App() {
    return (
        <ProjectsProvider>
            <TasksProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/projects" component={Projects} />
                    </Switch>
                </Router>
            </TasksProvider>
        </ProjectsProvider>
    )
}

export default App
