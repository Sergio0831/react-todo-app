import React, { useCallback, useEffect, useState } from "react";
import {
  CompletedButton,
  FilterButton,
  FilterItem,
  FilterList,
  ItemsLeft,
  StyledTodoActionFooter
} from "./styles/StyledTodoActionFooter";

const TodoActionFooter = ({ todos, setFiltered, setTodos }) => {
  const buttons = ["All", "Active", "Completed"];
  const [status, setStatus] = useState("All");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const itemsLeft = todos.reduce((total, todo) => {
    total += todo.isCompleted === false;
    return total;
  }, 0);

  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
  };

  const handleFilterTodos = useCallback(() => {
    switch (status) {
      case "Completed":
        setFiltered(todos.filter((todo) => todo.isCompleted === true));
        break;
      case "Active":
        setFiltered(todos.filter((todo) => todo.isCompleted === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  }, [todos, status, setFiltered]);

  useEffect(() => {
    handleFilterTodos();
  }, [todos, status, handleFilterTodos]);

  return (
    <StyledTodoActionFooter>
      <ItemsLeft>{itemsLeft} items left</ItemsLeft>

      <FilterList>
        {buttons.map((button) => (
          <FilterItem key={button}>
            <FilterButton
              className={status === button ? "active" : ""}
              value={button}
              onClick={handleStatus}
            >
              {button}
            </FilterButton>
          </FilterItem>
        ))}
      </FilterList>
      <CompletedButton onClick={() => handleClearCompleted()}>
        Clear Completed
      </CompletedButton>
    </StyledTodoActionFooter>
  );
};

export default TodoActionFooter;
