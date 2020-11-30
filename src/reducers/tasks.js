const UPDATE_TASK = ' UPDATE_TASK'
const ACTIVATE_TASKS = 'ACTIVATE_TASKS'
const DEACTIVATE_TASKS = 'DEACTIVATE_TASKS'
const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const TOGGLE_TASK_STATE = 'TOGGLE_TASKS_STATE'
const SET_TASK_BEING_EDITED = 'SET_TASK_BEING_EDITED'

const tasksReducer = (state, action) => {
    const { type, payload } = action
    const { tasks, activeTasks } = state
    let mapper

    switch (type) {
        case ACTIVATE_TASKS:
            return {
                ...state,
                activeTasks: tasks.filter((task) => task.project === payload),
            }
        case DEACTIVATE_TASKS:
            return {
                ...state,
                activeTasks: null,
                tasks: tasks.filter((task) => task.project !== payload),
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [payload, ...tasks],
                activeTasks: [payload, ...activeTasks],
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: tasks.filter((task) => task._id !== payload),
                activeTasks: activeTasks.filter((task) => task._id !== payload),
            }
        case TOGGLE_TASK_STATE:
            mapper = (task) => {
                if (task._id === payload) {
                    return { ...task, state: !task.state }
                }

                return task
            }

            return {
                ...state,
                tasks: tasks.map(mapper),
                activeTasks: activeTasks.map(mapper),
            }
        case SET_TASK_BEING_EDITED:
            return {
                ...state,
                taskBeingEdited: payload,
            }
        case UPDATE_TASK:
            mapper = (task) => {
                if (task._id === payload._id) {
                    return payload
                }

                return task
            }

            return {
                ...state,
                tasks: tasks.map(mapper),
                activeTasks: activeTasks.map(mapper),
                taskBeingEdited: null,
            }
        default:
            return state
    }
}

export {
    ACTIVATE_TASKS,
    DEACTIVATE_TASKS,
    ADD_TASK,
    REMOVE_TASK,
    TOGGLE_TASK_STATE,
    SET_TASK_BEING_EDITED,
    UPDATE_TASK,
}

export default tasksReducer
