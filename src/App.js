import React from 'react';
import './App.css';
import Row from './Row';

function App(props) {
  return (
    <div className="App">
      <h1>hello!</h1>
      <Row title="Netflix Originals" />
      <Row title="Trending now" />

    </div>
  );
}

export default App;
