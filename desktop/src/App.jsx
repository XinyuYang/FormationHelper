import React from 'react'
import { Switch, Route, HashRouter as Router, } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import CreatePage from './Pages/Create/Create'
import './App.scss'

function App() {
  return (
    <Router>
      <div className="window-top-bar" />
      <div className="app">
        <NavBar />

        <div className="content-container">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <CreatePage />
            </Route>
            <Route path="/shared">
              <Shared />
            </Route>
            <Route path="/credits">
              <Credits />
            </Route>
            <Route path="/user">
              <User />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Welcome back, Xinyu!</h2>
}

function Shared() {
  return <h2>Shared</h2>
}

function Credits() {
  return <h2>Credits</h2>
}

function User() {
  return <h2>User</h2>
}

export default App
