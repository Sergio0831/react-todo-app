import styled from 'styled-components/macro';
import { device } from '../theme/BreakPoints';

export const Footer = styled.div`
	display: grid;
	grid-template-areas:
		'items-left clear-completed'
		'filter filter';
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
	align-items: center;
	transition: box-shadow var(--transition), background-color var(--transition);

	@media ${device.mobile} {
		grid-template-areas: 'items-left filter clear-completed';
		box-shadow: 0 3.5rem 5rem -1.5rem ${(props) => props.theme.boxShadow};
		padding: 1.6rem 2.4rem;
		background-color: ${(props) => props.theme.todoActionBg};
	}
`;

export const ItemsLeft = styled.div`
	grid-area: items-left;
	box-shadow: 0 3.5rem 5rem -1.5rem ${(props) => props.theme.boxShadow};
	padding: 1.6rem 0 1.6rem 2.4rem;
	background-color: ${(props) => props.theme.todoActionBg};
	transition: inherit;
	border-bottom-left-radius: 5px;

	p {
		font-size: 1.4rem;
		line-height: 1;
		letter-spacing: -0.2px;
		color: ${(props) => props.theme.footerColor};
		transition: color var(--transition);
	}

	@media ${device.mobile} {
		box-shadow: none;
		padding: 0;
		background-color: transparent;
		border-bottom-left-radius: 0;
	}
`;

export const FilterList = styled.ul`
	grid-area: filter;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.6rem 2.4rem;
	margin-top: 1.6rem;
	background-color: ${(props) => props.theme.todoActionBg};
	box-shadow: 0 3.5rem 5rem -1.5rem ${(props) => props.theme.boxShadow};
	transition: inherit;
	border-radius: 5px;

	@media ${device.mobile} {
		background-color: transparent;
		box-shadow: none;
		padding: 0;
		margin-top: 0;
	}
`;

export const FilterItem = styled.li`
	&:not(:last-child) {
		margin-right: 1.9rem;
	}
`;

export const FilterButton = styled.button`
	border: none;
	background-color: transparent;
	font-weight: 700;
	font-size: 1.4rem;
	line-height: 1;
	letter-spacing: -0.2px;
	color: ${(props) => props.theme.footerColor};
	cursor: pointer;
	transition: color var(--transition);

	&:focus:not(:focus-visible) {
		outline: none;
	}

	&:focus-visible {
		outline: 2px dashed var(--primary);
		outline-offset: 3px;
	}

	&.active {
		color: var(--primary);
	}

	&:hover {
		color: ${(props) => props.theme.footerColorHover};
	}
`;

export const CompletedButton = styled.div`
	grid-area: clear-completed;
	display: inherit;
	justify-items: end;
	box-shadow: 0 3.5rem 5rem -1.5rem ${(props) => props.theme.boxShadow};
	padding: 1.6rem 2.4rem 1.6rem 0;
	background-color: ${(props) => props.theme.todoActionBg};
	border-bottom-right-radius: 5px;
	transition: inherit;

	${FilterButton} {
		font-weight: 400;
	}

	@media ${device.mobile} {
		box-shadow: none;
		padding: 0;
		background-color: transparent;
		border-bottom-right-radius: 0;
	}
`;
