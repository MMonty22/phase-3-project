import React from "react";

function Bet({betInfo}) {
    const {description, odds, league, betType, result, unitsChange, segment} = betInfo[0]
    
    return (
        <div className="betInfo">
            <h3>{description} {odds}</h3>
            <p>{league}</p>
            <p>{betType}</p>
            <p>{result}</p>
            <p>{unitsChange}</p>
            <p>{segment}</p>
        </div>
    )
}

export default Bet