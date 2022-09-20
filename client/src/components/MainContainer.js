import React from "react";
import Bet from "./Bet";

function MainContainer({bets, isShown, setIsShown}) {
    const info = bets.map((betInfo) => <Bet key={betInfo.id} betInfo={betInfo.bets} bets={bets} isShown={isShown} setIsShown={setIsShown}/>)

    return (
        <div>
            <ul>{info}</ul>
        </div>
    )
}

export default MainContainer