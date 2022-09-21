import React from "react";
import Bet from "./Bet";

function MainContainer({betData, handlePersonID, handleRemoveBet, navigate}) {
    const info = betData.map((betInfo) => <Bet key={betInfo.id} betInfo={betInfo[0]} handlePersonID={handlePersonID} handleRemoveBet={handleRemoveBet} navigate={navigate}/>)

    return (
        <div>
            <ul>{info}</ul>
        </div>
    )
}

export default MainContainer