import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
	display: grid;
	max-width: 144rem;
	width: var(--full-width);
	height: var(--full-height);
	margin: 0 auto;
	background-color: ${(props) => props.theme.bgColor};
	transition: background-color var(--transition);
`;

export const FooterContainer = styled.footer`
	align-self: end;
	padding: 5rem 0;

	p {
		text-align: center;
		color: ${(props) => props.theme.footerColor};
		transition: color var(--transition);
	}
`;
