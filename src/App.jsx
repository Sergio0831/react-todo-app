import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledAlert, Text } from './styles/StyledAlert';

import { themeDark, themeLight } from './theme/theme';
import audioOn from './audio/light-on.mp3';
import audioOff from './audio/light-off.mp3';
import useSound from 'use-sound';
import { TodoProvider } from './context/TodoContext';
import useLocalStorage from './hooks/useLocalStorage';
import {
	Container,
	Footer,
	Header,
	IconMoon,
	IconSun,
	TodoAction,
	TodoActionFooter,
	TodoForm,
	TodoList,
} from './components';
import {
	Switcher,
	Title,
	TodoContainer,
	TodoHeader,
} from './styles/StyledTodoContainer';
import { LayoutGroup } from 'framer-motion';

const App = () => {
	const [nightMode, setNightMode] = useLocalStorage('night_mode', false);
	const [alert, setAlert] = useState(false);
	const [, setSound] = useState(new Audio());
	const [playOn] = useSound(audioOn, { volume: 0.5 });
	const [playOff] = useSound(audioOff, { volume: 0.5 });

	const playSound = () => {
		nightMode ? setSound(playOn()) : setSound(playOff());
	};

	useEffect(() => {
		setTimeout(() => {
			setAlert(false);
		}, 1500);
	}, [alert]);

	const icon = nightMode ? <IconSun /> : <IconMoon />;

	const handleNightMode = () => {
		setNightMode(!nightMode);
	};

	return (
		<TodoProvider>
			<ThemeProvider theme={nightMode ? themeDark : themeLight}>
				<Container>
					<StyledAlert alert={alert}>
						<Text nightMode={nightMode}>Create Todo</Text>
					</StyledAlert>
					<Header />
					<TodoContainer>
						<TodoHeader nightMode={nightMode}>
							<Title>todo</Title>
							<Switcher
								type='button'
								aria-label={
									nightMode ? `Change to light mode` : `Change to dark mode`
								}
								onClick={() => {
									playSound();
									handleNightMode();
								}}
								nightMode={nightMode}
							>
								{icon}
							</Switcher>
						</TodoHeader>
						<TodoForm autocomplete='off' setAlert={setAlert} />
						<LayoutGroup>
							<TodoAction>
								<TodoList />
								<TodoActionFooter />
							</TodoAction>
						</LayoutGroup>
					</TodoContainer>

					<Footer text='Drag and drop to reorder list' />
				</Container>
			</ThemeProvider>
		</TodoProvider>
	);
};

export default App;
