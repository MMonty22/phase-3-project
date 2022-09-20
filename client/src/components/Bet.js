import React from "react";

function Bet({betInfo, handlePersonID, navigate}) {
    const {description, odds, league, bet_type, result, units_change, person_id, segment} = betInfo[0]

    function handleClick() {
        navigate('/Table')
    }

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