import React from 'react';
import './css/MainPage.css';
import WelcomePage from "./Pages/WelcomePage";
import CreditPage from "./Pages/CreditPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
      // Uncomment this to go to WelcomePage
      <React.Fragment>
          <WelcomePage/>
          <MainPage/>
          <CreditPage/>
      </React.Fragment>
  );
}

export default App;
