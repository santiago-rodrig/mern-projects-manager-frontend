import React, { createContext, useReducer } from 'react'
import tasksReducer, {
    ACTIVATE_TASKS,
    DEACTIVATE_TASKS,
    ADD_TASK,
    REMOVE_TASK,
    TOGGLE_TASK_STATE,
} from './reducer'
import { v4 as uuidv4 } from 'uuid'

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

    const deactivateTasks = (projectId) => {
        dispatch({ type: DEACTIVATE_TASKS, payload: projectId })
    }

    const addTask = (task) => {
        const payload = { ...task, id: uuidv4() }

        dispatch({ type: ADD_TASK, payload })
    }

    const removeTask = (taskId) => {
        dispatch({ type: REMOVE_TASK, payload: taskId })
    }

    const toggleTaskState = (taskId) => {
        dispatch({ type: TOGGLE_TASK_STATE, payload: taskId })
    }

    return (
        <TasksContext.Provider
            value={{
                toggleTaskState,
                tasks,
                activeTasks,
                activateTasks,
                deactivateTasks,
                addTask,
                removeTask,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}

export { TasksContext }
export default TasksProvider
