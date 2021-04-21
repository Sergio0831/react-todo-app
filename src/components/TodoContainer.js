import React from "react";
import {
  StyledTodoContainer,
  Switcher,
  Title,
  TodoHeader,
  FooterText
} from "./styles/StyledTodoContainer";
import IconMoon from "./IconMoon";
import IconSun from "./IconSun";
import TodoForm from "./TodoForm";
import TodoAction from "./TodoAction";

export default function TodoContainer({ onToggleClick, nightMode }) {
  const icon = nightMode ? <IconMoon /> : <IconSun />;

  return (
    <StyledTodoContainer>
      <TodoHeader nightMode={nightMode}>
        <Title>todo</Title>
        <Switcher onClick={onToggleClick} nightMode={nightMode}>
          {icon}
        </Switcher>
      </TodoHeader>
      <TodoForm />
      <TodoAction />
      <FooterText>Drag and drop to reorder list</FooterText>
    </StyledTodoContainer>
  );
}
