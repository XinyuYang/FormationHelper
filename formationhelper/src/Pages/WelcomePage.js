import React from 'react';
import "./CSS/WelcomePage.css"
import newlogo from './Images/newlogo.png'


function App() {
    return (
        <div className="App" >
            <div>
                <h1>WELCOME</h1>
            </div>
            <ul>
                <li><a className="active" href="#home">buttom1</a></li>
                <li><a href="#news">button2</a></li>
                <li>
                    <img src={newlogo} width="30px" height="30px"/>
                </li>
                <li><a href="#contact">button3</a></li>
                <li><a href="#about">button4</a></li>
            </ul>

            <img src={newlogo} width="300px" height="300px"/>
            <div>
                <h2>this is a heading</h2>
                <p>this is a text this is a text this is a text this is a text this is a text</p>
                <p>this is a text this is a text this is a text this is a text this is a text</p>
                <p>this is a text this is a text this is a text this is a text this is a text</p>
                <p>this is a text this is a text this is a text this is a text this is a text</p>
                <p>this is a text this is a text this is a text this is a text this is a text</p>


            </div>
        </div>
    );
}

export default App;