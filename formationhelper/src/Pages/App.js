import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import CreditPage from "./CreditPage";
import MainPage from "./MainPage";
import WelcomePage from "./WelcomePage";

function App() {
  return (
      // Uncomment this to go to WelcomePage
      <React.Fragment>
        <WelcomePage/>
        {/*<MainPage/>*/}
        {/*<CreditPage/>*/}
      </React.Fragment>
  );
}

export default App;
