import {  combineReducers, createStore } from "redux"
import tasks from './reducers/tasks'

const store = createStore(combineReducers({
    tasks
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store