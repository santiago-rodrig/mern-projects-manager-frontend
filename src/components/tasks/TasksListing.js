import React, { Fragment, useContext } from 'react'
import Task from './Task'
import { ProjectsContext } from '../../context/projects/context'
import { TasksContext } from '../../context/tasks/context'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const TasksListing = () => {
    const { activeProject } = useContext(ProjectsContext)
    const { activeTasks: tasks } = useContext(TasksContext)

    return (
        <Fragment>
            <h2>Proyecto: {activeProject.name}</h2>
            <ul className="listado-tareas">
                {tasks === null || tasks.length === 0 ? (
                    <li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    <TransitionGroup>
                        {tasks.map((task) => (
                            <CSSTransition
                                key={task.id}
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
