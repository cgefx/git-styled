import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import AboutPage from './pages/AboutPage';

import './styles/styles.scss';

function App() {
  return (
    <Router>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/user/:username' component={UserPage} />
      <Route exact path='/about' component={AboutPage} />
    </Router>
  );
}

export default App;
