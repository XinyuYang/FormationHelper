import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import MainPage from "./MainPage";
import WelcomePage from "./WelcomePage";

function App() {
  return (
      // Uncomment this to go to WelcomePage
      <React.Fragment>
        <WelcomePage/>
      </React.Fragment>
  );
}

export default App;
