import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AnimalsList } from './AnimalsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AnimalsList />
      </header>
    </div>
  );
}

export default App;
