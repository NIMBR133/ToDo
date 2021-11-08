import { dateFormatFunc } from './../../helpers/dateFormat'

const initialState = {
    tasksList: [],
    error: ''
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            const {taskText, date} = action.payload

            const dateFormat = dateFormatFunc(date)

            const taskRepeat = state.tasksList.some(item => item.taskText === taskText)
            
            return {
                ...state,
                error: taskRepeat && 'Такая задача уже существует',
                tasksList: taskRepeat
                    ? [...state.tasksList]
                    : [...state.tasksList, {taskText, status: false, date: dateFormat}]
            }
        }
        case 'TASK_COMPLETED': {
            return {
                ...state,
                tasksList: state.tasksList.map((task, index) => (
                    index === action.payload
                        ? {...task, status: true}
                        : {...task}
                )) 
            }
        }
        case 'TASK_CHANGE': {
            return {
                ...state,
                tasksList: state.tasksList.map((task, index) => (
                    index === action.payload.index
                        ? {...task, taskText: action.payload.text}
                        : {...task}
                )) 
            }
        }
        case 'TASK_DELETE': {
            return {
                ...state,
                tasksList: state.tasksList.filter((task, index) => index !== action.index) 
            }
        }
        case 'DELETE_ERROR': {
            return {
                ...state,
                error: ''
            }
        }
        default:
            return state
    }
}

export default tasks