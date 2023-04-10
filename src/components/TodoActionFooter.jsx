import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import {
	CompletedButton,
	FilterButton,
	FilterItem,
	FilterList,
	Footer,
	ItemsLeft,
} from '../styles/StyledTodoActionFooter';

const TodoActionFooter = () => {
	const buttons = ['All', 'Active', 'Completed'];

	const { status, onStatus, onClearCompleted, itemsLeft } =
		useContext(TodoContext);

	return (
		<Footer>
			<ItemsLeft>
				<p>
					{itemsLeft} {itemsLeft === 1 ? 'item' : 'items'} left
				</p>
			</ItemsLeft>
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
			<CompletedButton>
				<FilterButton
					onClick={() => onClearCompleted()}
					aria-label='Clear all todos'
				>
					Clear Completed
				</FilterButton>
			</CompletedButton>
		</Footer>
	);
};

export default TodoActionFooter;
