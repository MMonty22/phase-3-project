import React from "react";
import Bet from "./Bet";

function MainContainer({bets}) {
    const info = bets.map((betInfo) => <Bet key={betInfo.id} betInfo={betInfo.bets} bets={bets}/>)

    return (
        <div>
            <ul>{info}</ul>
        </div>
    )
}

export default MainContainer