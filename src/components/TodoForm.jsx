import React, { useContext, useState } from 'react';
import { v4 } from 'uuid';
import {
	StyledTodoForm,
	SubmitButton,
	Label,
	Input,
} from '../styles/StyledTodoForm';
import { TodoContext } from '../context/TodoContext';

const TodoForm = ({ setAlert }) => {
	const [value, setValue] = useState('');
	const { todos, setTodos } = useContext(TodoContext);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!value) {
			setAlert(true);
		} else {
			setTodos([
				{
					id: v4(),
					value: value,
					isCompleted: false,
				},
				...todos,
			]);
			setValue('');
		}
	};

	return (
		<StyledTodoForm autoComplete='off' onSubmit={handleFormSubmit}>
			<SubmitButton type='submit' aria-label='Add Todo'></SubmitButton>
			<Label htmlFor='add'>
				<Input
					id='add'
					type='text'
					placeholder='Create a new todo…'
					value={value}
					onChange={(e) => setValue(e.target.value)}
					autoFocus
					autoComplete='off'
					maxLength='40'
				/>
			</Label>
		</StyledTodoForm>
	);
};

export default TodoForm;
