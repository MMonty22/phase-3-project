import './App.css';
import React, {useEffect, useState} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer"
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const navigate = useNavigate()
  const [bets, setBets] = useState([])
  //const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    fetch('http://localhost:9292/people')
    .then(res => res.json())
    .then(data => setBets(data))
  }, [])

  function addBet(newBet) {
    const updatedBets = [newBet,...bets]
    setBets(updatedBets)
  }

    // const names = bets.forEach((person) => person.name)

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
  //should change this so I dont have to hard code in a case for each person that is added, can I do this with the name from the above forEach??

  return (
    <div className="App">
      <h1 className="header">Live on the Line Bet Tracker</h1>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainContainer bets={bets} handlePersonID={handlePersonID} navigate={navigate}/>}/>
        <Route path="/AddBet" element={<Form addBet={addBet}/>}/>
        <Route path="/Table" element={<Table bets={bets} />}/>
      </Routes>
    </div>
  );
}

export default App;
