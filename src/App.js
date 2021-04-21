import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components/macro";
import Container from "./components/Container";
import Header from "./components/Header";
import { themeDark, themeLight } from "./components/theme/theme";
import TodoContainer from "./components/TodoContainer";

export default function App() {
  const [nightMode, setNightMode] = useState(
    () => localStorage.getItem("night_mode") === "true"
  );

  const handleToggleClick = () => {
    setNightMode(!nightMode);
  };

  useEffect(() => {
    localStorage.setItem("night_mode", nightMode);
  }, [nightMode]);

  return (
    <ThemeProvider theme={nightMode ? themeDark : themeLight}>
      <Container>
        <Header />
        <TodoContainer
          onToggleClick={handleToggleClick}
          nightMode={nightMode}
          setNightMode={setNightMode}
        />
      </Container>
    </ThemeProvider>
  );
}
