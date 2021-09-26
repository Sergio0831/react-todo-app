import React, { useEffect, useState } from "react";
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
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  const [nightMode, setNightMode] = useState(
    () => localStorage.getItem("night_mode") === "true"
  );
  const [alert, setAlert] = useState(false);

  const [sound, setSound] = useState(new Audio());
  const [playOn] = useSound(audioOn, { volume: 0.5 });
  const [playOff] = useSound(audioOff, { volume: 0.5 });

  const playSound = () => {
    nightMode ? setSound(playOn()) : setSound(playOff());
  };

  const icon = nightMode ? <IconSun /> : <IconMoon />;

  const handleToggleClick = () => {
    setNightMode(!nightMode);
  };

  useEffect(() => {
    localStorage.setItem("night_mode", nightMode);
  }, [nightMode]);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  }, [alert]);

  return (
    <TodoProvider>
      <ThemeProvider theme={nightMode ? themeDark : themeLight}>
        <Container>
          <StyledAlert alert={alert}>
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
            <TodoForm autocomplete='off' setAlert={setAlert} />
            <TodoAction>
              <TodoList />
              <TodoActionFooter />
            </TodoAction>
            <FooterText>Drag and drop to reorder list</FooterText>
          </TodoContainer>
        </Container>
      </ThemeProvider>
    </TodoProvider>
  );
};

export default App;
