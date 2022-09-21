import './App.css';
import React, {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer"
import Form from './components/Form';

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

  const betData = bets.map((betInfo) => betInfo.bets)
  //const names = bets.forEach((person) => person.name)

  function handlePersonID(person_id) {
    switch(person_id) {
        case 1:
            return 'Dani'
        case 2:
            return 'Brad'
        case 3:
            return 'Cam'
        case 4:
            return 'Michael'
        case 5:
            return 'Funston'
        case 6:
          return 'Cody'
        case 7:
            return 'Tank'
        default:
      }
  }
  //can I change this so I dont have to hard code in a case for each person that is added?

  function editBet(betToEdit) {

  }

  function removeBet(betToRemove) {
    const formerBets = bets.filter((bet) => bet.id !== betToRemove.id)
    setBets(formerBets)
  }

  return (
    <div className="App">
      <h1 className="header">Live on the Line Bet Tracker</h1>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainContainer betData={betData} handlePersonID={handlePersonID} editBet={editBet} removeBet={removeBet}/>}/>
        <Route path="/AddBet" element={<Form addBet={addBet}/>}/>
      </Routes>
    </div>
  );
}

export default App;
