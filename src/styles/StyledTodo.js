import styled from 'styled-components/macro';
import iconCheck from '../images/icon-check.svg';
import { motion } from 'framer-motion';
import { device } from '../theme/BreakPoints';

export const DeleteButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	opacity: 1;
	transition: opacity var(--transition);

	&:focus:not(:focus-visible) {
		outline: none;
	}

	&:focus-visible {
		outline: 2px dashed var(--primary);
		outline-offset: 3px;
	}

	@media (hover: hover) {
		opacity: 0;
	}
`;

export const StyledTodo = styled(motion.li)`
	display: flex;
	padding: 1.6rem 2rem;
	align-items: center;
	transition: background-color var(--transition), border-color var(--transition);
	background-color: ${(props) => props.theme.todoActionBg};
	border-bottom: 1px solid ${(props) => props.theme.todoBorderBottom};

	&:first-child {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	&:hover ${DeleteButton} {
		opacity: 1;
	}

	@media ${device.mobile} {
		padding: 2rem 2.4rem;
		grid-template-columns: min-content 1fr min-content;
	}
`;

export const TodoText = styled.div`
	cursor: grab;
	padding-left: 2rem;
	padding-right: 2rem;
	flex: fit-content;

	p {
		color: ${(props) =>
			props.isCompleted
				? props.theme.completedTodoColor
				: props.theme.todoColor};
		user-select: none;
		line-height: 1.5;
		letter-spacing: -0.25px;
		transition: color var(--transition);
		word-break: break-all;
		text-decoration: ${(props) =>
			props.isCompleted ? 'line-through' : 'none'};
	}

	@media ${device.mobile} {
		padding-left: 2.4rem;
		padding-right: 2.4rem;
	}
`;

export const CustomCheckbox = styled.div`
	position: relative;
	box-sizing: border-box;
	width: 2rem;
	height: 2rem;
	border: 1px solid ${(props) => props.theme.todoBorderBottom};
	border-radius: 50%;
	background-color: ${(props) => props.theme.todoActionBg};
	z-index: 15;
	cursor: pointer;
	transition: opacity var(--transition), border-color var(--transition),
		background-color var(--transition);

	@media ${device.mobile} {
		width: 2.4rem;
		height: 2.4rem;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: var(--full-width);
		height: var(--full-height);
		background-image: url(${iconCheck}),
			linear-gradient(to bottom right, #57ddff, #c058f3);
		background-repeat: no-repeat;
		background-position: center;
		border-radius: 50%;
		transition: opacity var(--transition), background-image var(--transition);
		opacity: 0;
		border: 1px solid transparent;
		background-origin: border-box;
		z-index: 10;
	}
`;

export const Checkbox = styled.input`
	position: absolute;
	width: 1px;
	height: 1px;
	overflow: hidden;
	clip: rect(0 0 0 0);

	&:focus:not(:focus-visible) + ${CustomCheckbox} {
		outline: none;
	}

	&:focus-visible + ${CustomCheckbox} {
		outline: 2px dashed var(--primary);
		outline-offset: 3px;
	}

	&:checked + ${CustomCheckbox} {
		border: transparent;

		::before {
			opacity: 1;
		}
	}
`;

export const Label = styled.label`
	cursor: pointer;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		width: var(--full-width);
		height: var(--full-height);
		top: 0;
		left: 0;
		z-index: 5;
		transform: scale(0.9);
		border-radius: var(--round);
		background-image: var(--gradient);
		transition: transform var(--transition);
	}

	&:hover {
		${CustomCheckbox} {
			border-color: transparent;
		}

		&::after {
			transform: scale(1.1);
		}
	}
`;
