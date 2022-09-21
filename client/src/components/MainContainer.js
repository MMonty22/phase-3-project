import React from "react";
import Bet from "./Bet";

function MainContainer({betData, handlePersonID, editBet, handleRemoveBet}) {
    const info = betData.map((betInfo) => <Bet key={betInfo.id} betInfo={betInfo[0]} handlePersonID={handlePersonID} editBet={editBet} handleRemoveBet={handleRemoveBet}/>)

    return (
        <div>
            <ul>{info}</ul>
        </div>
    )
}

export default MainContainer