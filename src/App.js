import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

import './styles/styles.scss';

function App() {
  return (
    <Router>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/user' component={UserPage} />
    </Router>
  );
}

export default App;
