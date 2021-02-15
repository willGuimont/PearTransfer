import React from 'react';
import { Counter } from './features/counter/Counter';
import { Transfer } from './features/transfer/Transfer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Transfer />
        <Counter />
      </header>
    </div>
  );
}

export default App;
