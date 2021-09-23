import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import Header from "./components/Header";
import IconMoon from "./components/IconMoon";
import IconSun from "./components/IconSun";
import { StyledAlert, Text } from "./components/styles/StyledAlert";
import {
  FooterText,
  Switcher,
  Title,
  TodoContainer,
  TodoHeader
} from "./components/styles/StyledTodoContainer";
import { themeDark, themeLight } from "./components/theme/theme";
import audioOn from "./audio/light-on.mp3";
import audioOff from "./audio/light-off.mp3";
import useSound from "use-sound";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoAction from "./components/TodoAction";
import TodoActionFooter from "./components/TodoActionFooter";

const App = () => {
  const [nightMode, setNightMode] = useState(
    () => localStorage.getItem("night_mode") === "true"
  );

  const [sound, setSound] = useState(new Audio(audioOff));
  const [playOn] = useSound(audioOn, { volume: 0.25 });
  const [playOff] = useSound(audioOff, { volume: 0.25 });

  const playSound = () => {
    nightMode ? playOn() : playOff();
  };

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [alert, setAlert] = useState(false);
  const icon = nightMode ? <IconSun /> : <IconMoon />;

  const handleToggleClick = () => {
    setNightMode(!nightMode);
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
        <TodoContainer>
          <TodoHeader nightMode={nightMode}>
            <Title>todo</Title>
            <Switcher
              type='button'
              aria-label='alternative for screen readers'
              title='alternative for other users'
              onClick={() => {
                playSound();
                handleToggleClick();
              }}
              nightMode={nightMode}
            >
              {icon}
            </Switcher>
          </TodoHeader>
          <TodoForm
            autocomplete='off'
            setAlert={setAlert}
            setTodos={setTodos}
            todos={todos}
          />
          <TodoAction>
            <TodoList todos={todos} setTodos={setTodos} />
            <TodoActionFooter todos={todos} />
          </TodoAction>
          <FooterText>Drag and drop to reorder list</FooterText>
        </TodoContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
