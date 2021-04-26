import React, { useState } from "react";
import {
  StyledTodoForm,
  SubmitButton,
  Label,
  Input
} from "../components/styles/StyledTodoForm";

const TodoForm = ({ addTodo, setAlert }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setAlert(true);
    } else {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <StyledTodoForm autocomplete='off' onSubmit={handleFormSubmit}>
      <SubmitButton type='submit'></SubmitButton>
      <Label htmlFor='add'></Label>
      <Input
        id='add'
        type='text'
        placeholder='Create a new todo…'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
      />
    </StyledTodoForm>
  );
};

export default TodoForm;
