import React, { useContext } from 'react';
import Todo from './Todo';
import { StyledTodoList } from '../styles/StyledTodoList';
import { TodoContext } from '../context/TodoContext';
import { AnimatePresence } from 'framer-motion';

const TodoList = () => {
	const { filtered } = useContext(TodoContext);

	return (
		<AnimatePresence initial={false} mode='popLayout'>
			<StyledTodoList>
				{filtered.map((todo, index) => (
					<Todo key={todo.id} todo={todo} index={index} />
				))}
			</StyledTodoList>
		</AnimatePresence>
	);
};
export default TodoList;
