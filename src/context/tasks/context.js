import React, { createContext, useReducer } from 'react'
import tasksReducer from './reducer'

const TasksContext = createContext()

const TasksProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tasksReducer, {
        tasks: [],
    })

    const { tasks } = state

    return (
        <TasksContext.Provider value={{ tasks }}>
            {children}
        </TasksContext.Provider>
    )
}

export { TasksContext }
export default TasksProvider
