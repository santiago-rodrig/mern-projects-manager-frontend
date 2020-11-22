const ACTIVATE_TASKS = 'ACTIVATE_TASKS'
const DEACTIVATE_TASKS = 'DEACTIVATE_TASKS'
const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const TOGGLE_TASK_STATE = 'TOGGLE_TASKS_STATE'

const tasksReducer = (state, action) => {
    const { type, payload } = action
    const { tasks, activeTasks } = state

    switch (type) {
        case ACTIVATE_TASKS:
            return {
                ...state,
                activeTasks: tasks.filter((task) => task.projectId === payload),
            }
        case DEACTIVATE_TASKS:
            return {
                ...state,
                activeTasks: null,
                tasks: tasks.filter((task) => task.projectId !== payload),
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
                tasks: tasks.filter((task) => task.id !== payload),
                activeTasks: activeTasks.filter((task) => task.id !== payload),
            }
        case TOGGLE_TASK_STATE:
            const mapper = (task) => {
                if (task.id === payload) {
                    return { ...task, state: !task.state }
                }

                return task
            }

            return {
                ...state,
                tasks: tasks.map(mapper),
                activeTasks: activeTasks.map(mapper),
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
}
export default tasksReducer
