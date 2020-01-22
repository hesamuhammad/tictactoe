import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <h1>TICTACTOE</h1>
        <div className= "tictactoe">
          <Game/>
        </div>
    </div>
  );
}

export default App;
