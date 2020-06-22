import React from 'react';
import './App.css';
import smoke from './assets/smoke.mp4'

function App() {
  return (
    <div className="App first">
        <video className="video" src={smoke} autoPlay muted={true}></video>
        <h2> Welcome to my web page</h2>
    </div>
  );
}

export default App;
