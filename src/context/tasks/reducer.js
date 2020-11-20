const ACTIVATE_TASKS = 'ACTIVATE_TASKS'
const REMOVE_TASKS = 'REMOVE_TASKS'
const ADD_TASK = 'ADD_TASK'

const tasksReducer = (state, action) => {
    const { type, payload } = action
    const { tasks, activeTasks } = state

    switch (type) {
        case ACTIVATE_TASKS:
            return {
                ...state,
                activeTasks: tasks.filter((task) => task.projectId === payload),
            }
        case REMOVE_TASKS:
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
        default:
            return state
    }
}

export { ACTIVATE_TASKS, REMOVE_TASKS, ADD_TASK }
export default tasksReducer
