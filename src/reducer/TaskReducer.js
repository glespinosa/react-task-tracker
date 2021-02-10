export const ACTIONS = {
    DELETE_TASK: 'DELETE_TASK',
    TOGGLE_REMINDER: 'TOGGLE_REMINDER',
    ADD_TASK: 'ADD_TASK',
    RETRIEVE_TASKS: 'RETRIEVE_TASKS',
    ALL_TASKS: 'ALL_TASKS',
}

export const reducer = (tasks, { type, payload }) => {
    switch (type) {
        case ACTIONS.DELETE_TASK:
            return tasks.filter((task) => task.id !== payload.id)
        case ACTIONS.ADD_TASK:
            return [...tasks, payload]
        case ACTIONS.TOGGLE_REMINDER:
            const updTasks = tasks.map((task) =>
                task.id === payload.id
                    ? { ...task, reminder: !task.reminder }
                    : task
            )
            return updTasks
        case ACTIONS.RETRIEVE_TASKS:
            return payload
        case ACTIONS.ALL_TASKS:
            return tasks
        default:
            return tasks
    }
}
