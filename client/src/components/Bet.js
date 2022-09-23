import React from "react";
import {useNavigate} from "react-router-dom"

function Bet({betInfo, handlePersonID}) {
    const {description, odds, result, units_change, person_id} = betInfo
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/bets/${person_id}`)
    }
    
    return (
        <div className="betInfo">
            <h2>{handlePersonID(person_id)}'s Bet History</h2>
            <p>Overall Record:</p>
            <h3>Most Recent Bet</h3>
            <h4>{description} ({odds})</h4>
            <p>Result: {result}</p>
            <p>Units Won or Lost: {units_change}</p>
            <button onClick={handleClick}>{`See All of ${handlePersonID(person_id)}'s bets`}</button>
        </div>
    )
}

export default Bet