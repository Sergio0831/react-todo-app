import styled from 'styled-components';

export const StyledTodoForm = styled.form`
	display: grid;
	grid-template-columns: max-content 1fr;
	column-gap: 2rem;
	align-items: center;
	margin-bottom: 1.6rem;
	padding: 1.6rem 2rem;
	background-color: ${(props) => props.theme.todoBgColor};
	box-shadow: 0 3.5rem 5rem -1.5rem ${(props) => props.theme.boxShadow};
	border-radius: 5px;
	transition: background-color var(--transition), box-shadow var(--transition);

	@media only screen and (min-width: 34.375em) {
		margin-bottom: 2.4rem;
		column-gap: 2.4rem;
		padding: 2rem 2.4rem;
	}
`;

export const SubmitButton = styled.button`
	grid-area: 1 / 1 / -1 / -1;
	height: 2rem;
	width: 2rem;
	z-index: 10;
	background-color: ${(props) => props.theme.todoBgColor};
	box-sizing: border-box;
	border: 1px solid ${(props) => props.theme.inputButtonColor};
	border-radius: 50%;
	cursor: pointer;
	transition: border-color var(--transition), background-color var(--transition);

	&:focus:not(:focus-visible) {
		outline: none;
	}

	&:focus-visible {
		outline: 2px dashed var(--primary);
		outline-offset: 3px;
	}

	@media only screen and (min-width: 34.375em) {
		height: 2.4rem;
		width: 2.4rem;
	}
`;

export const ButtonContainer = styled.div`
	display: grid;
	place-items: center;

	&::before {
		content: '';
		grid-area: 1 / 1 / -1 / -1;
		height: 2rem;
		width: 2rem;
		z-index: 5;
		transform: scale(0.9);
		border-radius: var(--round);
		background-image: var(--gradient);
		transition: transform var(--transition);

		@media only screen and (min-width: 34.375em) {
			height: 2.4rem;
			width: 2.4rem;
		}
	}

	&:hover {
		&::before {
			transform: scale(1.1);
		}

		${SubmitButton} {
			border-color: transparent;
		}
	}
`;

export const Label = styled.label`
	display: flex;
	place-items: center;
`;

export const Input = styled.input`
	width: var(--full-width);
	border: none;
	background-color: transparent;
	font-size: 1.6rem;
	line-height: 1.6rem;
	font-family: inherit;
	font-weight: inherit;
	letter-spacing: -0.17px;
	color: ${(props) => props.theme.inputTypingColor};
	outline: none;
	caret-color: #3a7cfd;
	box-sizing: border-box;
	transition: color var(--transition);

	&::placeholder {
		letter-spacing: -0.016rem;
		color: ${(props) => props.theme.inputColor};
		transition: color var(--transition);
	}

	@media only screen and (min-width: 34.375em) {
		font-size: 1.8rem;
		line-height: 1.8rem;
		letter-spacing: -0.25px;
	}
`;
