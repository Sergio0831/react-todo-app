import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import Header from "./components/Header";
import IconMoon from "./components/IconMoon";
import IconSun from "./components/IconSun";
import { StyledAlert, Text } from "./components/styles/StyledAlert";
import {
  CompletedButton,
  FilterButton,
  FilterItem,
  FilterList,
  ItemsLeft,
  TodoAction,
  TodoActionFooter
} from "./components/styles/StyledTodoAction";
import {
  FooterText,
  Switcher,
  Title,
  TodoContainer,
  TodoHeader
} from "./components/styles/StyledTodoContainer";
import {
  Input,
  SubmitButton,
  Label,
  TodoForm
} from "./components/styles/StyledTodoForm";
import { themeDark, themeLight } from "./components/theme/theme";
import TodoList from "./components/TodoList";
import { useId } from "react-id-generator";

export default function App() {
  const [nightMode, setNightMode] = useState(
    () => localStorage.getItem("night_mode") === "true"
  );
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const icon = nightMode ? <IconSun /> : <IconMoon />;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      setAlert(true);
    } else {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          value: value,
          isCompleted: isCompleted
        }
      ]);
      setValue("");
    }
  };

  const handleToggleClick = () => {
    setNightMode(!nightMode);
  };

  const handleDeleteClick = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("night_mode", nightMode);
  }, [nightMode]);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  }, [alert]);

  return (
    <ThemeProvider theme={nightMode ? themeDark : themeLight}>
      <Container>
        <StyledAlert alert={alert} setAlert={setAlert}>
          <Text>Add Todo</Text>
        </StyledAlert>
        <Header />
        {/* Todo Container */}
        <TodoContainer>
          <TodoHeader nightMode={nightMode}>
            <Title>todo</Title>
            <Switcher
              type='button'
              aria-label='alternative for screen readers'
              title='alternative for other users'
              onClick={handleToggleClick}
              nightMode={nightMode}
            >
              {icon}
            </Switcher>
          </TodoHeader>
          {/* Todo Form */}
          <TodoForm
            autocomplete='off'
            onSubmit={handleFormSubmit}
            setAlert={setAlert}
          >
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
          </TodoForm>
          {/* Todo Form End */}
          {/* Todo Action */}
          <TodoAction>
            {/* Todo List */}
            <TodoList todos={todos} onDeleteClick={handleDeleteClick} />
            {/* Todo List End */}
            <TodoActionFooter>
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
            </TodoActionFooter>
          </TodoAction>
          {/* Todo Action end */}
          <FooterText>Drag and drop to reorder list</FooterText>
        </TodoContainer>
        {/* Todo Container End */}
      </Container>
    </ThemeProvider>
  );
}
