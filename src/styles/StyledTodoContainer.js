import styled from 'styled-components/macro';

export const TodoContainer = styled.div`
	max-width: 90vw;
	width: 100%;
	justify-self: center;
	grid-row: 1 / -1;
	grid-column: 1/ -1;
	margin-top: 4.8rem;

	@media only screen and (min-width: 34.375em) {
		max-width: 54rem;
		margin-top: 7rem;
	}
`;

export const TodoHeader = styled.div`
	display: flex;
	margin-bottom: 1.5rem;
	justify-content: space-between;
	align-items: center;

	@media only screen and (min-width: 34.375em) {
		margin-bottom: 5rem;
	}
`;

export const Title = styled.h1`
	margin: 0;
	font-weight: 700;
	font-size: 3rem;
	line-height: 3rem;
	letter-spacing: 1.5rem;
	color: #fff;
	text-transform: uppercase;

	@media only screen and (min-width: 34.375em) {
		font-size: 4rem;
		line-height: 4rem;
	}
`;

export const Switcher = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: none;

	&:focus:not(:focus-visible) {
		outline: none;
	}

	&:focus-visible {
		outline: 2px dashed #fff;
		outline-offset: 3px;
	}
`;
