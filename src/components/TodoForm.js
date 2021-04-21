import React, { useState } from "react";
import {
  StyledTodoForm,
  SubmitButton,
  Label,
  Input
} from "../components/styles/StyledTodoForm";

const TodoForm = () => {
  const [value, setValue] = useState("");

  return (
    <StyledTodoForm class='todo__form' autocomplete='off'>
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
