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

export default function TodoAction() {
  return (
    <StyledTodoAction>
      <ul class='todo__list'></ul>
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
