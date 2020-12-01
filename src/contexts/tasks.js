import React, { createContext, useReducer } from 'react'
import axiosClient from '../config/axios'

import tasksReducer, {
    UPDATE_TASK,
    ACTIVATE_TASKS,
    DEACTIVATE_TASKS,
    ADD_TASK,
    REMOVE_TASK,
    SET_TASK_BEING_EDITED,
} from '../reducers/tasks'

const TasksContext = createContext()

const TasksProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tasksReducer, {
        tasks: [],
        taskBeingEdited: null,
    })

    const { tasks, taskBeingEdited } = state

    const activateTasks = async (projectId) => {
        try {
            const response = await axiosClient.get('/api/tasks/', {
                params: { project: projectId },
            })

            const {
                data: { tasks: payload },
            } = response

            dispatch({ type: ACTIVATE_TASKS, payload })
        } catch (error) {
            console.log(error.response.data)
        }
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

    const removeTask = async (taskId) => {
        try {
            await axiosClient.delete(`api/tasks/${taskId}`)

            dispatch({ type: REMOVE_TASK, payload: taskId })
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const setTaskBeingEdited = (task) => {
        dispatch({ type: SET_TASK_BEING_EDITED, payload: task })
    }

    const updateTask = async (task) => {
        const cleanTask = {
            name: task.name,
            completed: task.completed,
        }

        try {
            const response = await axiosClient.put(
                `/api/tasks/${task._id}`,
                cleanTask
            )

            const {
                data: { task: payload },
            } = response

            dispatch({ type: UPDATE_TASK, payload })
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <TasksContext.Provider
            value={{
                setTaskBeingEdited,
                tasks,
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
