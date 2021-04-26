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
  const icon = nightMode ? <IconSun /> : <IconMoon />;

  return (
    <StyledTodoContainer>
      <TodoHeader nightMode={nightMode}>
        <Title>todo</Title>
        <Switcher
          type='button'
          aria-label='alternative for screen readers'
          title='alternative for other users'
          onClick={onToggleClick}
          nightMode={nightMode}
        >
          {icon}
        </Switcher>
      </TodoHeader>
      <TodoForm />
      <TodoAction />
      <FooterText>Drag and drop to reorder list</FooterText>
    </StyledTodoContainer>
  );
}
