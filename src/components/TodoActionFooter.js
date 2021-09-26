import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import {
  CompletedButton,
  FilterButton,
  FilterItem,
  FilterList,
  TopFooter,
  ItemsLeft
} from "./styles/StyledTodoActionFooter";

const TodoActionFooter = () => {
  const buttons = ["All", "Active", "Completed"];

  const app = useContext(TodoContext);
  const { status, onStatus, onClearCompleted, itemsLeft } = app;

  return (
    <>
      <TopFooter>
        <ItemsLeft>{itemsLeft} items left</ItemsLeft>
        <CompletedButton onClick={() => onClearCompleted()}>
          Clear Completed
        </CompletedButton>
      </TopFooter>
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
    </>
  );
};

export default TodoActionFooter;
