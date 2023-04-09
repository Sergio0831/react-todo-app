import React, { useContext } from 'react';
import Todo from './Todo';
import { StyledTodoList } from '../styles/StyledTodoList';
import { TodoContext } from '../context/TodoContext';
import { AnimatePresence, Reorder } from 'framer-motion';

const TodoList = () => {
	const { filtered, setFiltered } = useContext(TodoContext);

	return (
		<AnimatePresence initial={false} mode='popLayout'>
			<Reorder.Group
				as={StyledTodoList}
				axis='y'
				values={filtered}
				onReorder={setFiltered}
			>
				{filtered.map((todo, index) => (
					<Todo key={todo.id} todo={todo} index={index} />
				))}
			</Reorder.Group>
		</AnimatePresence>
	);
};
export default TodoList;
