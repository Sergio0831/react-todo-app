import React, { useContext, useState } from "react";
import { v4 } from "uuid";
import {
  StyledTodoForm,
  SubmitButton,
  Label,
  Input
} from "../components/styles/StyledTodoForm";
import { TodoContext } from "../context/TodoContext";

const TodoForm = ({ setAlert }) => {
  const [value, setValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const app = useContext(TodoContext);
  const { todos, setTodos } = app;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      setAlert(true);
    } else {
      setTodos([
        ...todos,
        {
          id: v4(),
          value: value,
          isCompleted: isCompleted
        }
      ]);
      setValue("");
    }
  };

  return (
    <StyledTodoForm autoComplete='off' onSubmit={handleFormSubmit}>
      <SubmitButton type='submit'></SubmitButton>
      <Label htmlFor='add'></Label>
      <Input
        id='add'
        type='text'
        placeholder='Create a new todo…'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
        autoComplete='off'
      />
    </StyledTodoForm>
  );
};

export default TodoForm;
