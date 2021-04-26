import React from "react";
import {
  StyledTodoList,
  Label,
  Checkbox,
  CustomCheckbox,
  DeleteButton,
  TodoText,
  Todo
} from "./styles/StyledTodoList";
import CrossIcon from "./CrossIcon";

export default function TodoList({
  todos,
  onDeleteClick,
  showTodo,
  setShowTodo
}) {
  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <Todo key={todo.id} showTodo={showTodo}>
          <Label>
            <Checkbox type='checkbox' id='checkbox' name='complete' />
            <CustomCheckbox class='custom-checkbox'></CustomCheckbox>
            <TodoText>{todo.value}</TodoText>
          </Label>
          <DeleteButton
            type='button'
            aria-label='alternative for screen readers'
            title='alternative for other users'
            onClick={() => onDeleteClick(todo.id)}
          >
            <CrossIcon />
          </DeleteButton>
        </Todo>
      ))}
    </StyledTodoList>
  );
}
