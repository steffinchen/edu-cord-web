import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Nav from './nav';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes />
    </Router>
  );
}

export default App;
