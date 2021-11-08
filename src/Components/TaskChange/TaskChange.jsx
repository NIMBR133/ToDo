import React from 'react'
import { FormControl, Button, InputGroup } from 'react-bootstrap'

const TaskChange = ({ taskInput, onChangeTaskInput, saveChangeTask, unSaveChangeTask }) => {
    return (
        <InputGroup className="text-change">
            <FormControl
                value={taskInput}
                onChange={onChangeTaskInput}
                autoFocus
            />
            <Button 
                variant="outline-success"
                onClick={saveChangeTask}
            >
                Сохранить
            </Button>
            <Button 
                variant="outline-danger"
                onClick={unSaveChangeTask}
            >
                Отмена
            </Button>
        </InputGroup>
    )
}

export default TaskChange
