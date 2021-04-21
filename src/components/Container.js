import React from "react";
import { StyledContainer } from "./styles/StyledContainer";

export default function Container({ children, ...restProps }) {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
}
