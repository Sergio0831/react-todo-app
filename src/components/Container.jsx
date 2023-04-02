import React from 'react';
import { StyledContainer } from '../styles/StyledContainer';

const Container = ({ children, ...restProps }) => {
	return <StyledContainer {...restProps}>{children}</StyledContainer>;
};

export default Container;
