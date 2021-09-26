import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import {
  CompletedButton,
  FilterButton,
  FilterItem,
  FilterList,
  ItemsLeft,
  StyledTodoActionFooter
} from "./styles/StyledTodoActionFooter";

const TodoActionFooter = () => {
  const buttons = ["All", "Active", "Completed"];

  const app = useContext(TodoContext);
  const { status, onStatus, onClearCompleted, itemsLeft } = app;

  return (
    <StyledTodoActionFooter>
      <ItemsLeft>{itemsLeft} items left</ItemsLeft>

      <FilterList>
        {buttons.map((button) => (
          <FilterItem key={button}>
            <FilterButton
              className={status === button ? "active" : ""}
              value={button}
              onClick={onStatus}
            >
              {button}
            </FilterButton>
          </FilterItem>
        ))}
      </FilterList>
      <CompletedButton onClick={() => onClearCompleted()}>
        Clear Completed
      </CompletedButton>
    </StyledTodoActionFooter>
  );
};

export default TodoActionFooter;
