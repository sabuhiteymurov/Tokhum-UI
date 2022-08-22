import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import './assets/style/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
