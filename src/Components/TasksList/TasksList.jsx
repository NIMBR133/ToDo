import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './TasksList.scss'
import { taskCompleted, taskChange, taskDelete } from '../../redux/actions/tasks'
import Task from '../Task/Task'

const TaskList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.tasksList)

    const onClickTaskCompleted = (id) => { dispatch(taskCompleted(id)) }

    const onClickDeleteTask = (id) => { dispatch(taskDelete(id)) }

    const saveTask = (id, taskInput) => { dispatch(taskChange(id, taskInput)) }

    return (
        <div className="tasks-list">
            {
                tasks.length > 0
                    ? tasks.map((task, id) => (
                        <Task
                            key={`${task}_${id}`}
                            task={task}
                            id={id}
                            saveTask={saveTask}
                            onClickDeleteTask={onClickDeleteTask}
                            onClickTaskCompleted={onClickTaskCompleted}
                        />
                    ))
                    : <div className="tasks-list_empty">Задач пока нет...</div>
            }
        </div>
    )
}

export default TaskList
