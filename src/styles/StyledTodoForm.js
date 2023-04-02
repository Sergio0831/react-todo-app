import styled from 'styled-components';

export const StyledTodoForm = styled.form`
	display: flex;
	align-items: center;
	margin-bottom: 1.6rem;

	@media only screen and (min-width: 34.375em) {
		margin-bottom: 2.4rem;
	}
`;

export const SubmitButton = styled.button`
	height: 2rem;
	width: 2rem;
	background: ${(props) => props.theme.todoBgColor};
	border: 1px solid ${(props) => props.theme.inputButtonColor};
	border-radius: 50%;
	cursor: pointer;
	transition: border-color 0.5s ease;
	/* border-image: linear-gradient(135deg, #55ddff 0, #c058f3 100%); */

	/* &::before {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 50%;
		height: 2.4rem;
		width: 2.4rem;
		z-index: 50;
	} */

	&:hover {
		/* border-color: transparent; */
	}

	@media only screen and (min-width: 34.375em) {
		height: 2.4rem;
		width: 2.4rem;
		left: 2.4rem;
	}
`;

export const Label = styled.label`
	position: absolute;
	left: 2rem;
	z-index: 10;
`;

export const Input = styled.input`
	position: relative;
	width: 100%;
	padding: 1.8rem 5.2rem;
	border: none;
	font-size: 1.6rem;
	line-height: 1.6rem;
	font-family: inherit;
	font-weight: inherit;
	letter-spacing: -0.17px;
	color: ${(props) => props.theme.inputTypingColor};
	outline: none;
	caret-color: #3a7cfd;
	background-color: ${(props) => props.theme.todoBgColor};
	box-sizing: border-box;
	box-shadow: 0 3.5rem 5rem -1.5rem ${(props) => props.theme.boxShadow};
	border-radius: 5px;
	transition: background-color 0.5s ease, box-shadow 0.5s ease;

	&::placeholder {
		letter-spacing: -0.016rem;
		color: ${(props) => props.theme.inputColor};
	}

	@media only screen and (min-width: 34.375em) {
		padding: 2rem 7.2rem;
		font-size: 1.8rem;
		line-height: 1.8rem;
		letter-spacing: -0.25px;
	}
`;
