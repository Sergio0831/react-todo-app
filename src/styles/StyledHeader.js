import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
	background: url(${(props) => props.theme.bgImageMobile}) no-repeat center;
	background-size: cover;
	height: 20rem;
	grid-row: 1 / -1;
	grid-column: 1/ -1;
	transition: background-image 0.5s ease;

	@media (min-width: 34.375em) {
		background: url(${(props) => props.theme.bgImage}) no-repeat center;
		background-size: cover;
		height: 30rem;
	}
`;
