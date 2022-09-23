import React from "react";
import {useNavigate} from "react-router-dom"

function Person({betInfo}) {
    //const {id, name, bets} = betInfo
    const {description, odds, result, units_change, person_id} = betInfo.bets[0] //DO THIS SHIT, sort most recent
    console.log('betInfo', betInfo)
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/bets/?id=${person_id}`)
    }
    
    return (
        <div className="betInfo">
            <h2>{betInfo.name}'s Bet History</h2>
            <p>Overall Record:</p>
            <h3>Most Recent Bet</h3>
            <h4>{description} ({odds})</h4>
            <p>Result: {result}</p>
            <p>Units Won or Lost: {units_change}</p>
            <button onClick={handleClick}>{`See All of ${betInfo.name}'s bets`}</button>
        </div>
    )
}

export default Person