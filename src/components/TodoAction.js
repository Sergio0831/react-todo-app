import React from "react";
import {
  StyledTodoAction,
  TodoActionFooter,
  ItemsLeft,
  FilterList,
  FilterItem,
  FilterButton,
  CompletedButton
} from "./styles/StyledTodoAction";
import TodoList from "./TodoList";

export default function TodoAction() {
  return (
    <StyledTodoAction>
      <TodoList />
      <TodoActionFooter>
        <ItemsLeft>5 items left</ItemsLeft>
        <FilterList>
          <FilterItem>
            <FilterButton>All</FilterButton>
          </FilterItem>
          <FilterItem>
            <FilterButton>Active</FilterButton>
          </FilterItem>
          <FilterItem>
            <FilterButton>Completed</FilterButton>
          </FilterItem>
        </FilterList>
        <CompletedButton>Clear Completed</CompletedButton>
      </TodoActionFooter>
    </StyledTodoAction>
  );
}
