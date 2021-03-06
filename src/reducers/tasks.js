const UPDATE_TASK = ' UPDATE_TASK'
const ACTIVATE_TASKS = 'ACTIVATE_TASKS'
const DEACTIVATE_TASKS = 'DEACTIVATE_TASKS'
const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const SET_TASK_BEING_EDITED = 'SET_TASK_BEING_EDITED'
const ERROR_MESSAGE = 'ERROR_MESSAGE'
const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

const tasksReducer = (state, action) => {
    const { type, payload } = action
    const { tasks } = state
    let mapper

    switch (type) {
        case ACTIVATE_TASKS:
            return {
                ...state,
                tasks: payload,
            }
        case DEACTIVATE_TASKS:
            return {
                ...state,
                tasks: [],
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [payload, ...tasks],
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: tasks.filter((task) => task._id !== payload),
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
                taskBeingEdited: null,
            }
        case ERROR_MESSAGE:
            return {
                ...state,
                msg: {
                    content: payload,
                    category: 'alerta-error',
                },
            }
        case CLEAR_MESSAGE:
            return {
                ...state,
                msg: {
                    content: '',
                    category: '',
                },
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
    SET_TASK_BEING_EDITED,
    UPDATE_TASK,
    ERROR_MESSAGE,
    CLEAR_MESSAGE,
}

export default tasksReducer
