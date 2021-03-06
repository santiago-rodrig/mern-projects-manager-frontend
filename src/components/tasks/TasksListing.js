import React, { Fragment, useContext } from 'react'
import Task from './Task'
import { ProjectsContext } from '../../contexts/projects'
import { TasksContext } from '../../contexts/tasks'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const TasksListing = () => {
    const { activeProject } = useContext(ProjectsContext)
    const { tasks } = useContext(TasksContext)

    return (
        <Fragment>
            <h2>Proyecto: {activeProject.name}</h2>
            <ul className="listado-tareas">
                {!tasks || tasks.length === 0 ? (
                    <li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    <TransitionGroup>
                        {tasks.map((task) => (
                            <CSSTransition
                                key={task._id}
                                classNames="tarea"
                                timeout={200}
                            >
                                <Task task={task} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                )}
            </ul>
        </Fragment>
    )
}

export default TasksListing
