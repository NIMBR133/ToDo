import React, { useState, useRef } from 'react'
import { FaPencilAlt, FaTrashAlt, FaRegClock } from "react-icons/fa"
import { Row, Col, Form } from 'react-bootstrap'

import './Task.scss'
import TaskChange from '../TaskChange/TaskChange'


const Task = ({ task, id, saveTask, onClickDeleteTask, onClickTaskCompleted }) => {
	const ref = useRef(null)
	const [editTask, setEditTask] = useState(false)
	const [taskInput, setTaskInput] = useState(task.taskText)

	const onClickTaskChange = () => { setEditTask(true) }

	const onChangeTaskInput = (e) => { setTaskInput(e.target.value) }

	const saveChangeTask = () => {
		setEditTask(false)
		if (task.taskText !== taskInput) {
			saveTask(id, taskInput)
		}
	}

	const unSaveChangeTask = () => {
		setTaskInput(task.taskText)
		setEditTask(false)
	}
	
	React.useEffect(() => {
		setTaskInput(task.taskText)
		if (editTask) {
			const handleClick = (e) => {
				if (ref.current && !ref.current.contains(e.target)) {
					setEditTask(false)
				}
			}
			document.addEventListener('click', handleClick)
			return () => document.removeEventListener('click', handleClick)
		}
	}, [editTask, task.taskText])

	return (
		<Row className={`task ${editTask && "task_bg"}`}>
			<Col xs md="7" className="task__item">
				<Form.Check.Input
					disabled={task.status}
					checked={task.status}
					onChange={() => onClickTaskCompleted(id)} 
				/>
				<div
					ref={ref}
					className={`task__item-text ${task.status && "task__item_crossed"}`}
				>
					{
						!editTask
							? task.taskText
							: <TaskChange
								taskInput={taskInput}
								onChangeTaskInput={onChangeTaskInput}
								saveChangeTask={saveChangeTask}
								unSaveChangeTask={unSaveChangeTask}
							/>
					}
				</div>
			</Col>
			<Col xs md="4" className="task__item">
				<FaRegClock />
				<span className={`${task.status && "task__item_crossed"}`}>
					{task.date}
				</span>
			</Col>
			<Col xs md="1" className="task__icons">
				<FaPencilAlt
					onClick={onClickTaskChange}
					className={`${task.status && "icon-disabled"}`} 
				/>
				<FaTrashAlt 
					onClick={() => onClickDeleteTask(id)}
				/>
			</Col>
		</Row>
	)
}

export default React.memo(Task)
