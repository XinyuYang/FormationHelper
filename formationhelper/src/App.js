import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
        <div id="top-bar" className="box">
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

        <div id="bottom-bar" className="box">
            <p>This is the bottom bar</p>
        </div>
    </div>
  );
}

export default App;
