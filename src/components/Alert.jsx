import React, { useContext } from 'react';
import { StyledAlert, Text } from '../styles/StyledAlert';
import { TodoContext } from '../context/TodoContext';

const Alert = () => {
	const { alert, setAlert } = useContext(TodoContext);

	return (
		<StyledAlert alert={alert} setAlert={setAlert}>
			<Text>Add Todo</Text>
		</StyledAlert>
	);
};

export default Alert;
