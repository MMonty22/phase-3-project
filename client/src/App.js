import './App.css';
import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer"
import BetForm from './components/BetForm';
import EditForm from './components/EditForm';
import PersonForm from './components/PersonForm';
import Table from './components/Table'

function App() {
  const [bets, setBets] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/people')
    .then(res => res.json())
    .then(data => setBets(data))
  }, [])

  function addBet(newBet) {
    const updatedBets = [newBet,...bets]
    setBets(updatedBets)
  }

  //const names = bets.forEach((person) => person.name)
  console.log('bets', bets)

  function editBet(editedBet) {
    const editedBets = [editedBet,...bets]
    setBets(editedBets)
  }

  function removeBet(betToRemove) {
    const formerBets = bets.filter((bet) => bet.id !== betToRemove.id)
    setBets(formerBets)
  }

  const betID = bets.map((betInfo) => betInfo.id)

  function handleRemoveBet() {
    fetch(`http://localhost:9292/people/${betID}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(deletedBet => removeBet(deletedBet))
  }

  return (
    <div className="App">
      <h1 className="header">Live on the Line Bet Tracker</h1>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainContainer bets={bets}/>}/>
        <Route path="/bets/new" element={<BetForm addBet={addBet}/>}/>
        <Route path="/person/new" element={<PersonForm addBet={addBet}/>}/>
        <Route path="/bets/edit" element={<EditForm editBet={editBet} bets={bets}/>}/>
        <Route path="/bets" element={<Table bets={bets} handleRemoveBet={handleRemoveBet}/>}/>
      </Routes>
    </div>
  );
}

export default App;
