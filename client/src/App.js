import './App.css';
import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer"
import Form from './components/Form';

function App() {
  const [bets, setBets] = useState([])
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    fetch('http://localhost:9292/people')
    .then(res => res.json())
    .then(data => setBets(data))
  }, [])

  function addBet(newBet) {
    const updatedBets = [newBet,...bets]
    setBets(updatedBets)
  }

  return (
    <div className="App">
      <h1 className="header">Live on the Line Bet Tracker</h1>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainContainer bets={bets} isShown={isShown} setIsShown={setIsShown}/>}/>
        <Route path="/AddBet" element={<Form addBet={addBet}/>}/>
      </Routes>
    </div>
  );
}

export default App;
