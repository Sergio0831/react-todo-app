import React from "react";
import { StyledTodoAction } from "./styles/StyledTodoAction";

const TodoAction = ({ children }) => {
  return <StyledTodoAction>{children}</StyledTodoAction>;
};

export default TodoAction;
