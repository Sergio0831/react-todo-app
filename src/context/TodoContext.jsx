import React, { createContext, useCallback, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [filtered, setFiltered] = useState([]);
	const [status, setStatus] = useState('All');
	const [todos, setTodos] = useLocalStorage('todos', []);

	const handleDeleteTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	const handleCompletedTodo = (id) => {
		const updatedTodo = todos.map((todo) => {
			if (id === todo.id) {
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return todo;
		});
		setTodos(updatedTodo);
	};

	const handleStatus = (e) => {
		setStatus(e.target.value);
	};

	const itemsLeft = todos.reduce((total, todo) => {
		total += todo.isCompleted === false;
		return total;
	}, 0);

	const handleClearCompleted = () => {
		const newTodos = todos.filter((todo) => !todo.isCompleted);
		setTodos(newTodos);
	};

	const handleFilterTodos = useCallback(() => {
		switch (status) {
			case 'Completed':
				setFiltered(todos.filter((todo) => todo.isCompleted === true));
				break;
			case 'Active':
				setFiltered(todos.filter((todo) => todo.isCompleted === false));
				break;
			default:
				setFiltered(todos);
				break;
		}
	}, [todos, status, setFiltered]);

	useEffect(() => {
		handleFilterTodos();
	}, [todos, status, handleFilterTodos]);

	const value = {
		filtered,
		setFiltered,
		todos,
		setTodos,
		status,
		setStatus,
		itemsLeft,
		onStatus: handleStatus,
		onClearCompleted: handleClearCompleted,
		onDeleteTodo: handleDeleteTodo,
		onCompletedTodo: handleCompletedTodo,
	};
	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
