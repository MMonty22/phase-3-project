import React from "react";

function Bet({betInfo}) {
    const {description, odds, league, bet_type, result, units_change, segment} = betInfo[0]
    //console.log('betInfo', betInfo[0])
    //Dani = 1, Brad = 2, Cam = 3, Michael = 4, Funston = 5, Cody = 6, Tank = 7

    return (
        <div className="betInfo">
            <h3>{description} ({odds})</h3>
            <p>Result: {result}</p>
            <p>Type of Bet: {bet_type}</p>
            <p>League: {league}</p>
            <p>Units Won or Lost: {units_change}</p>
            <p>Segment: {segment}</p>
        </div>
    )
}

export default Bet