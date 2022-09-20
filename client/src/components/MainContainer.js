import React from "react";
import Bet from "./Bet";

function MainContainer({bets, handlePersonID, navigate}) {
    const info = bets.map((betInfo) => <Bet key={betInfo.id} betInfo={betInfo.bets} bets={bets} handlePersonID={handlePersonID} navigate={navigate}/>)

    return (
        <div>
            <ul>{info}</ul>
        </div>
    )
}

export default MainContainer