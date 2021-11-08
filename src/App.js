import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'

import './App.scss'
import AddTask from './Components/AddTask/AddTask'
import TasksList from './Components/TasksList/TasksList';

const App = () => {
	return (
		<div className="App">
			<Container fluid>
				<Row className="justify-content-md-center">
					<Col>
						<AddTask />
					</Col>
				</Row>
				<TasksList />
			</Container>
		</div>
	);
}

export default App
