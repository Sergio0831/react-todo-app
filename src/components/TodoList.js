import React from "react";
import {
  StyledTodoList,
  Label,
  Checkbox,
  CustomCheckbox,
  DeleteButton,
  TodoText,
  Todo
} from "./styles/StyledTodoList";
import CrossIcon from "./CrossIcon";
import { AnimatePresence, motion, usePresence } from "framer-motion";

const TodoList = ({ todos, setTodos, filtered }) => {
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompletedTodo = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

  const [isPresent, safeToRemove] = usePresence();

  const animations = {
    layout: true,
    initial: "out",
    exit: "out",
    style: {
      position: isPresent ? "static" : "absolute"
    },
    animate: isPresent ? "in" : "out",
    whileTap: "tapped",
    variants: {
      in: { scaleY: 1, opacity: 1 },
      out: { scaleY: 0.5, opacity: 0, zIndex: -1 },
      tapped: { scale: 0.7, opacity: 0.5, transition: { duration: 0.05 } }
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition
  };

  return (
    <AnimatePresence>
      <StyledTodoList>
        {filtered.map((todo) => {
          const { id, value, isCompleted } = todo;
          return (
            <Todo as={motion.li} key={id} {...animations}>
              <Label htmlFor={id}>
                <Checkbox
                  type='checkbox'
                  id={id}
                  name='complete'
                  defaultChecked={isCompleted}
                  onChange={() => handleCompletedTodo(id)}
                />
                <CustomCheckbox className='custom-checkbox'></CustomCheckbox>
                <TodoText isCompleted={isCompleted}>{value}</TodoText>
              </Label>
              <DeleteButton
                type='button'
                aria-label='alternative for screen readers'
                title='alternative for other users'
                onClick={() => handleDeleteTodo(id)}
              >
                <CrossIcon />
              </DeleteButton>
            </Todo>
          );
        })}
      </StyledTodoList>
    </AnimatePresence>
  );
};

export default TodoList;
