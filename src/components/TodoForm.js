import React, { useState } from "react";
import { v4 } from "uuid";
import {
  StyledTodoForm,
  SubmitButton,
  Label,
  Input
} from "../components/styles/StyledTodoForm";

const TodoForm = ({ setTodos, todos, setAlert }) => {
  const [value, setValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

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
