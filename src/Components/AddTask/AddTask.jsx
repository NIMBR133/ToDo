import React, { useState } from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteError } from './../../redux/actions/tasks'

import './AddTask.scss'

const AddTask = () => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.tasks.error)
    const [task, setTask] = useState('')
    const [errorValidate, setErrorValidate] = useState('')

    const onChangeTask = (e) => {
        setErrorValidate('')
        if (error) {
            dispatch(deleteError())
        }
        setTask(e.target.value)
    }

    const onClickAddTask = () => {
        if (task.length > 1) {
            const date = new Date()
            setTask('')
            dispatch(addTask(task, date))
        } else {
            setErrorValidate('Введите не менее 2 символов')
        }
    }

    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Введите новую задачу"
                    value={task}
                    onChange={onChangeTask}
                />
                <Button
                    variant="success"
                    onClick={onClickAddTask}
                >
                    Добавить
                </Button>
            </InputGroup>
            {
                (error || errorValidate) &&
                <div className="errors errors_input">{error || errorValidate}</div>
            }
        </>
    )
}

export default AddTask
