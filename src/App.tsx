import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Hello from './components/Hello';
import About from './components/About';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact component={Hello} />
        <Route path='/about' component={About} />
      </div>
    </BrowserRouter>
  );
};

export default App;