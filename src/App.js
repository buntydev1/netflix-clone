import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
function App(props) {
  return (
    <div className="App">
      <h1>hello!</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriinal}/>
      <Row title="Trending now" fetchUrl={requests.fetchTrendingNow}/>

    </div>
  );
}

export default App;
