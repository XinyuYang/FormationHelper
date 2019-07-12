import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import CreditPage from './Pages/CreditPage'
import MainPage from './Pages/MainPage'
import WelcomePage from './Pages/WelcomePage'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component = {WelcomePage}/>
                <Route path='/credit' component = {CreditPage}/>
                <Route path='/welcome' component = {WelcomePage}/>
                <Route path='/main' component = {MainPage}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
