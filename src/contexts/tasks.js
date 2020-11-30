import React, { createContext, useReducer } from 'react'
import axiosClient from '../config/axios'

import tasksReducer, {
    UPDATE_TASK,
    ACTIVATE_TASKS,
    DEACTIVATE_TASKS,
    ADD_TASK,
    REMOVE_TASK,
    TOGGLE_TASK_STATE,
    SET_TASK_BEING_EDITED,
} from '../reducers/tasks'

const TasksContext = createContext()

const TasksProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tasksReducer, {
        tasks: [],
        activeTasks: null,
        taskBeingEdited: null,
    })

    const { tasks, activeTasks, taskBeingEdited } = state

    const activateTasks = (projectId) => {
        dispatch({ type: ACTIVATE_TASKS, payload: projectId })
    }

    const deactivateTasks = (projectId) => {
        dispatch({ type: DEACTIVATE_TASKS, payload: projectId })
    }

    const addTask = async (task) => {
        try {
            const response = await axiosClient.post('/api/tasks', task)

            const {
                data: { task: payload },
            } = response

            dispatch({ type: ADD_TASK, payload })
        } catch (error) {
            console.log(error.resonse.data)
        }
    }

    const removeTask = (taskId) => {
        dispatch({ type: REMOVE_TASK, payload: taskId })
    }

    const toggleTaskState = (taskId) => {
        dispatch({ type: TOGGLE_TASK_STATE, payload: taskId })
    }

    const setTaskBeingEdited = (task) => {
        dispatch({ type: SET_TASK_BEING_EDITED, payload: task })
    }

    const updateTask = (task) => {
        dispatch({ type: UPDATE_TASK, payload: task })
    }

    return (
        <TasksContext.Provider
            value={{
                setTaskBeingEdited,
                toggleTaskState,
                tasks,
                activeTasks,
                activateTasks,
                deactivateTasks,
                addTask,
                removeTask,
                taskBeingEdited,
                updateTask,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}

export { TasksContext }
export default TasksProvider
