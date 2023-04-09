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
import { Reorder, useDragControls } from 'framer-motion';

const Todo = ({ todo, index }) => {
	const { onCompletedTodo, onDeleteTodo } = useContext(TodoContext);
	const { id, value, isCompleted } = todo;
	const controls = useDragControls();

	return (
		<Reorder.Item
			as={StyledTodo}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.8 }}
			transition={{
				opacity: { duration: 0.2 },
				layout: {
					type: 'spring',
					bounce: 0.4,
				},
			}}
			layout
			value={todo}
			dragListener={false}
			dragControls={controls}
		>
			<Label htmlFor={id}>
				<Checkbox
					type='checkbox'
					id={id}
					name='complete'
					defaultChecked={isCompleted}
					onChange={() => onCompletedTodo(id)}
				/>
				<CustomCheckbox className='custom-checkbox'></CustomCheckbox>
			</Label>
			<TodoText
				isCompleted={isCompleted}
				onPointerDown={(e) => controls.start(e)}
				dragControls={controls}
			>
				<p>{value}</p>
			</TodoText>
			<DeleteButton
				type='button'
				aria-label='alternative for screen readers'
				title='alternative for other users'
				onClick={() => onDeleteTodo(id)}
			>
				<CrossIcon />
			</DeleteButton>
		</Reorder.Item>
	);
};

export default Todo;
