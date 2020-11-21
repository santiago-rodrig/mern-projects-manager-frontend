const ACTIVATE_TASKS = 'ACTIVATE_TASKS'
const DEACTIVATE_TASKS = 'DEACTIVATE_TASKS'
const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'

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
                tasks: [...tasks, payload],
                activeTasks: [...activeTasks, payload],
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: tasks.filter((task) => task.id !== payload),
                activeTasks: activeTasks.filter((task) => task.id !== payload),
            }
        default:
            return state
    }
}

export { ACTIVATE_TASKS, DEACTIVATE_TASKS, ADD_TASK, REMOVE_TASK }
export default tasksReducer
