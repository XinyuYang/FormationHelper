import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div id="top-bar">
            <p>This is the top bar</p>
        </div>

        <div id="side-bars">
            <div id="left-side-bar" className="box">
                <p>This is the left bar</p>
            </div>

            <div id="right-side-bar" className="box">
                <p>This is the right bar</p>
            </div>
        </div>

        <div id="bottom-bar">
            <p>This is the bottom bar</p>
        </div>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
