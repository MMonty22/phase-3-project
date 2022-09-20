import React from "react";

function Bet({betInfo, bets}) {
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

    //should change this so I dont have to hard code in a case for each person that is added

    return (
        <div className="betInfo">
            <h2>{handlePersonID(person_id)}</h2>
            <p>Most Recent Bet</p>
            <h3>{description} ({odds})</h3>
            <p><small>Result: {result}</small></p>
            <p>Type of Bet: {bet_type}</p>
            <p>League: {league}</p>
            <p>Units Won or Lost: {units_change}</p>
            <p>Segment: {segment}</p>
        </div>
    )
}

export default Bet