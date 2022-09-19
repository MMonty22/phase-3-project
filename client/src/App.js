import './App.css';
import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer"

function App() {
  const [bets, setBets] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/people')
    .then(res => res.json())
    .then(data => setBets(data))
  }, [])

  return (
    <div className="App">
      <h1 className="header">Live on the Line Bet Tracker</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContainer bets={bets}/>}/>
      </Routes>
    </div>
  );
}

export default App;
