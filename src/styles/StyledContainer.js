import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
	max-width: 144rem;
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	position: relative;
	background-color: ${(props) => props.theme.bgColor};
	transition: background-color 0.5s ease;
`;

export const FooterContainer = styled.footer`
	position: absolute;
	bottom: 5rem;
	width: 100%;

	p {
		text-align: center;
		color: ${(props) => props.theme.footerColor};
	}
`;
