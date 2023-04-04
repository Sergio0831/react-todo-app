import styled from 'styled-components/macro';
import iconCheck from '../images/icon-check.svg';
import { motion } from 'framer-motion';

export const DeleteButton = styled.button`
	background-color: transparent;
	border: none;
	justify-self: end;
	cursor: pointer;
	opacity: 0;
	visibility: hidden;
	transition: opacity var(--transition), visibility var(--transition);

	@media only screen and (max-width: 34.375em), only screen and (hover: none) {
		opacity: 1;
		visibility: visible;
	}
`;

export const StyledTodo = styled(motion.li)`
	display: grid;
	grid-template-columns: min-content max-content 1fr;
	padding: 1.6rem 2rem;
	align-items: center;
	transition: background-color var(--transition), border-color var(--transition);
	cursor: grab;
	background-color: ${(props) => props.theme.todoActionBg};
	border-bottom: 1px solid ${(props) => props.theme.todoBorderBottom};

	&:first-child {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	&:hover ${DeleteButton} {
		opacity: 1;
		visibility: visible;
	}

	@media only screen and (min-width: 34.375em) {
		padding: 2rem 2.4rem;
		grid-template-columns: min-content max-content 1fr;
	}
`;

export const Label = styled.label`
	cursor: pointer;
`;

export const TodoText = styled.p`
	color: ${(props) =>
		props.isCompleted ? props.theme.completedTodoColor : props.theme.todoColor};
	cursor: pointer;
	user-select: none;
	line-height: 1.5;
	letter-spacing: -0.25px;
	transition: color var(--transition);
	position: relative;
	margin-left: 1.2rem;

	&::before {
		content: '';
		left: ${(props) => (props.isCompleted ? '0' : '')};
		position: absolute;
		width: ${(props) => (props.isCompleted ? '100%' : '0')};
		height: 1px;
		top: calc(50% - 1px);
		transition: background-color var(--transition), width var(--transition);
		background-color: ${(props) =>
			props.isCompleted
				? props.theme.completedTodoColor
				: props.theme.todoColor};
	}

	@media only screen and (min-width: 34.375em) {
		margin-left: 2.4rem;
	}
`;

export const CustomCheckbox = styled.div`
	position: relative;
	box-sizing: border-box;
	width: 2rem;
	height: 2rem;
	border: 1px solid ${(props) => props.theme.todoBorderBottom};
	border-radius: 50%;
	background: transparent;
	cursor: pointer;
	transition: opacity var(--transition), border-color var(--transition);

	@media only screen and (min-width: 34.375em) {
		width: 2.4rem;
		height: 2.4rem;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${iconCheck}),
			linear-gradient(to bottom right, #57ddff, #c058f3);
		background-repeat: no-repeat;
		background-position: center;
		border-radius: 50%;
		transition: opacity var(--transition), background-image var(--transition);
		opacity: 0;
		border: 1px solid transparent;
		background-origin: border-box;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 1px solid transparent;
		border-radius: 50%;
		background: linear-gradient(135deg, rgb(87, 221, 255), rgb(192, 88, 243))
			border-box border-box;
		-webkit-mask: linear-gradient(
					rgb(255, 255, 255) 0px,
					rgb(255, 255, 255) 0px
				)
				padding-box padding-box,
			linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
		mask: linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)
				padding-box padding-box,
			linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
		-webkit-mask-composite: destination-out;
		mask-composite: destination-out;
		opacity: 0;
		transition: opacity var(--transition);
	}
`;

export const Checkbox = styled.input`
	position: absolute;
	width: 1px;
	height: 1px;
	overflow: hidden;
	clip: rect(0 0 0 0);

	&:checked + ${CustomCheckbox} {
		border: transparent;

		::before {
			opacity: 1;
		}
	}

	/* &:not(:checked):hover + ${CustomCheckbox} {
    ::after {
      opacity: 1;
    }
  }

  &:not(:checked):focus + ${CustomCheckbox} {
    ::after {
      opacity: 1;
    }
  } */
`;