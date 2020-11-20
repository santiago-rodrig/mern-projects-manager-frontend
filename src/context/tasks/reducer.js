const ACTIVATE_TASKS = 'ACTIVATE_TASKS'
const REMOVE_TASKS = 'REMOVE_TASKS'

const tasksReducer = (state, action) => {
    const { type, payload } = action
    const { tasks } = state

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
        default:
            return state
    }
}

export { ACTIVATE_TASKS, REMOVE_TASKS }
export default tasksReducer
