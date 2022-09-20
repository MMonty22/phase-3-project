import React from "react";
import Table from './Table';

function Bet({betInfo, bets, isShown, setIsShown}) {
    const {description, odds, league, bet_type, result, units_change, person_id, segment} = betInfo[0]

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

    function handleClick() {
        //setIsShown(!isShown)
        <Table betInfo={betInfo}/>
    }

    // <Route path='/Table' element={<Table isShown={isShown} setIsShown={setIsShown}/>}/>

    return (
        <div className="betInfo">
            <h2 onClick={handleClick}>{handlePersonID(person_id)}'s Most Recent Bet</h2>
            <h3>{description} ({odds})</h3>
            <p>Result: {result}</p>
            <p>Units Won or Lost: {units_change}</p>
            {/* <p>Type of Bet: {bet_type}</p>
            <p>League: {league}</p>
            <p>Segment: {segment}</p> */}
        </div>
    )
}

export default Bet