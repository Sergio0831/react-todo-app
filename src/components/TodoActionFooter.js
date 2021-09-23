import React from "react";
import {
  CompletedButton,
  FilterButton,
  FilterItem,
  FilterList,
  ItemsLeft,
  StyledTodoActionFooter
} from "./styles/StyledTodoActionFooter";

const TodoActionFooter = ({ todos }) => {
  return (
    <StyledTodoActionFooter>
      <ItemsLeft>{todos.length} items left</ItemsLeft>
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
    </StyledTodoActionFooter>
  );
};

export default TodoActionFooter;
