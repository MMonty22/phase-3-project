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
  const [allUserData, setAllUserData] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/people')
    .then(res => res.json())
    .then(data => setAllUserData(data))
  }, [])

  function addBet(newBet, userID) {
    const [relevantPerson] = allUserData.filter((user) => String(user.id) === String(userID))
    const updatedBets = [...relevantPerson.bets, newBet]
    const updatedUserData = {
      ...relevantPerson,
      bets: updatedBets
    }
    const updatedAllUserData = allUserData.filter((person) => person.id !== relevantPerson.id)
    setAllUserData([...updatedAllUserData, updatedUserData])
  }

  return (
    <div className="App">
      <h1 className="header">Live on the Line Bet Tracker</h1>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainContainer allUserData={allUserData}/>}/>
        <Route path="/bets" element={<Table allUserData={allUserData} setAllUserData={setAllUserData}/>}/>
        <Route path="/bets/new" element={<BetForm addBet={addBet}/>}/>
        <Route path="/person/new" element={<PersonForm allUserData={allUserData} setAllUserData={setAllUserData}/>}/>
        <Route path="/bets/edit" element={<EditForm setAllUserData={setAllUserData} allUserData={allUserData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
