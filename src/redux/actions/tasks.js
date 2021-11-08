export const addTask = (taskText, date) => ({
    type: 'ADD_TASK',
    payload: {taskText, date}
})

export const taskCompleted = (index) => ({
    type: 'TASK_COMPLETED',
    payload: index
})

export const taskChange = (index, text) => ({
    type: 'TASK_CHANGE',
    payload: {index, text}
})

export const taskDelete = (index) => ({
    type: 'TASK_DELETE',
    index: index
})

export const deleteError = () => ({
    type: 'DELETE_ERROR'
})
