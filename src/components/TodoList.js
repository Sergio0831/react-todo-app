import React, { useContext } from "react";
import Todo from "./Todo";
import { StyledTodoList } from "./styles/StyledTodoList";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const app = useContext(TodoContext);
  const { filtered } = app;

  return (
    <StyledTodoList>
      {filtered.map((todo) => {
        const { id } = todo;
        return <Todo key={id} {...todo} />;
      })}
    </StyledTodoList>
  );
};
export default TodoList;
