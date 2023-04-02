import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import {
	CompletedButton,
	FilterButton,
	FilterItem,
	FilterList,
	TopFooter,
	ItemsLeft,
} from '../styles/StyledTodoActionFooter';

const TodoActionFooter = () => {
	const buttons = ['All', 'Active', 'Completed'];

	const { status, onStatus, onClearCompleted, itemsLeft } =
		useContext(TodoContext);

	return (
		<>
			<TopFooter>
				<ItemsLeft>
					{itemsLeft} {itemsLeft === 1 ? 'item' : 'items'} left
				</ItemsLeft>
				<CompletedButton
					onClick={() => onClearCompleted()}
					aria-label='Clear all todos'
				>
					Clear Completed
				</CompletedButton>
			</TopFooter>
			<FilterList>
				{buttons.map((button) => (
					<FilterItem key={button}>
						<FilterButton
							className={status === button ? 'active' : ''}
							value={button}
							onClick={onStatus}
							aria-label={`Set ${button} todos`}
						>
							{button}
						</FilterButton>
					</FilterItem>
				))}
			</FilterList>
		</>
	);
};

export default TodoActionFooter;
