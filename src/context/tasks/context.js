import React, { createContext, useReducer } from 'react'
import tasksReducer, { ACTIVATE_TASKS, REMOVE_TASKS } from './reducer'

const TasksContext = createContext()

const TasksProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tasksReducer, {
        tasks: [
            { name: 'Buy Boots', state: false, id: '1', projectId: '1' },
            { name: 'Buy Pickaxe', state: false, id: '2', projectId: '1' },
            { name: 'Buy Gloves', state: false, id: '3', projectId: '2' },
            { name: 'Buy Coat', state: false, id: '4', projectId: '3' },
        ],
        activeTasks: null,
    })

    const { tasks, activeTasks } = state

    const activateTasks = (projectId) => {
        dispatch({ type: ACTIVATE_TASKS, payload: projectId })
    }

    const removeTasks = (projectId) => {
        dispatch({ type: REMOVE_TASKS, payload: projectId })
    }

    return (
        <TasksContext.Provider
            value={{ tasks, activeTasks, activateTasks, removeTasks }}
        >
            {children}
        </TasksContext.Provider>
    )
}

export { TasksContext }
export default TasksProvider
