import React from 'react';
import './css/MainPage.css';
import WelcomePage from "./Pages/WelcomePage";
import CreditPage from "./Pages/CreditPage";

function App() {
  return (
      // Uncomment this to go to WelcomePage
      <React.Fragment>
          <WelcomePage/>
          <CreditPage/>
      </React.Fragment>
  );
}

export default App;
