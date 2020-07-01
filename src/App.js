import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import AboutPage from './pages/AboutPage';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyle } from './style';

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<>
				<GlobalStyle />
				<Router>
					<Route exact path='/' component={HomePage} />
					<Route path='/user/:username' component={UserPage} />
					<Route exact path='/about' component={AboutPage} />
				</Router>
			</>
		</ThemeProvider>
	);
}

export default App;
