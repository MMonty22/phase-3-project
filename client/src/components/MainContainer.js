import React from "react";
import Bet from "./Bet";

function MainContainer({betData, handlePersonID}) {
    const info = betData.map((betInfo) => <Bet key={betInfo.id} betInfo={betInfo[0]} handlePersonID={handlePersonID}/>)

    return (
        <div>
            <ul>{info}</ul>
        </div>
    )
}

export default MainContainer