import React from "react";
import Bet from "./Bet";

function MainContainer({bets}) {
    const data = bets.map((betInfo) => <Bet key={betInfo.id} betInfo={betInfo}/>)

    return (
        <div>
            <ul>{data}</ul>
        </div>
    )
}

export default MainContainer