import React, { useContext } from 'react';
import {
	StyledTodo,
	Label,
	Checkbox,
	CustomCheckbox,
	DeleteButton,
	TodoText,
} from '../styles/StyledTodo';
import CrossIcon from './CrossIcon';
import { TodoContext } from '../context/TodoContext';

const Todo = ({ id, value, isCompleted }) => {
	const app = useContext(TodoContext);
	const { onCompletedTodo, onDeleteTodo } = app;

	return (
		<StyledTodo key={id}>
			<Label htmlFor={id}>
				<Checkbox
					type='checkbox'
					id={id}
					name='complete'
					defaultChecked={isCompleted}
					onChange={() => onCompletedTodo(id)}
				/>
				<CustomCheckbox className='custom-checkbox'></CustomCheckbox>
				<TodoText isCompleted={isCompleted}>{value}</TodoText>
			</Label>
			<DeleteButton
				type='button'
				aria-label='alternative for screen readers'
				title='alternative for other users'
				onClick={() => onDeleteTodo(id)}
			>
				<CrossIcon />
			</DeleteButton>
		</StyledTodo>
	);
};

export default Todo;
