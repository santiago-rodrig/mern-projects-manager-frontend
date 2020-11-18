import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Projects from './components/projects/Projects'
import ProjectsProvider from './context/projects/context'

function App() {
    return (
        <ProjectsProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/projects" component={Projects} />
                </Switch>
            </Router>
        </ProjectsProvider>
    )
}

export default App
