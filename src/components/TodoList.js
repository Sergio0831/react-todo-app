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

const TodoList = ({ todos, setTodos, filtered }) => {
  const handleDeleteClick = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodoCompleted = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  return (
    <StyledTodoList>
      {filtered.map((todo) => {
        const { id, value, isCompleted } = todo;
        return (
          <Todo key={id}>
            <Label htmlFor={id}>
              <Checkbox
                type='checkbox'
                id={id}
                name='complete'
                defaultChecked={isCompleted}
                onChange={() => toggleTodoCompleted(id)}
              />
              <CustomCheckbox className='custom-checkbox'></CustomCheckbox>
              <TodoText isCompleted={isCompleted}>{value}</TodoText>
            </Label>
            <DeleteButton
              type='button'
              aria-label='alternative for screen readers'
              title='alternative for other users'
              onClick={() => handleDeleteClick(id)}
            >
              <CrossIcon />
            </DeleteButton>
          </Todo>
        );
      })}
    </StyledTodoList>
  );
};

export default TodoList;
