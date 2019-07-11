import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import MainPage from "./MainPage";
import WelcomePage from "./WelcomePage";
import CreditPage from "./CreditPage";

function App() {
  return (
      <React.Fragment>
        <MainPage/>
        {/* <WelcomePage/> */}
        {/* <CreditPage/> */}
      </React.Fragment>
  );
}

export default App;
