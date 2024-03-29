import React from 'react';
import styled from 'styled-components/macro';

const CrossIcon = () => {
	return (
		<>
			<StyledCrossIconMobile
				width='12'
				height='12'
				viewBox='0 0 12 12'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					fill='#494C6B'
					d='M11.7851 0.471404L11.3137 0L5.89256 5.42115L0.471404 0L0 0.471404L5.42115 5.89256L0 11.3137L0.471404 11.7851L5.89256 6.36396L11.3137 11.7851L11.7851 11.3137L6.36396 5.89256L11.7851 0.471404Z'
				/>
			</StyledCrossIconMobile>
			<StyledCrossIcon
				xmlns='http://www.w3.org/2000/StyledCrossIcon'
				width='18'
				height='18'
			>
				<path
					fill='#494C6B'
					fillRule='evenodd'
					d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
				/>
			</StyledCrossIcon>
		</>
	);
};

export const StyledCrossIcon = styled.svg`
	color: ${(props) => props.theme.crossIconColor};
	display: none;

	@media only screen and (min-width: 34.375em) {
		display: block;
	}
`;

export const StyledCrossIconMobile = styled.svg`
	color: ${(props) => props.theme.crossIconColor};
	display: block;

	@media only screen and (min-width: 34.375em) {
		display: none;
	}
`;

export default CrossIcon;
