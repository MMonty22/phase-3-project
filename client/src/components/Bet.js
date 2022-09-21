import React, {useState} from "react";
import Table from "./Table";

function Bet({betInfo, handlePersonID, editBet, removeBet}) {
    const {description, odds, result, units_change, person_id} = betInfo
    const [isShown, setIsShown] = useState(false)

    function handleClick() {
        setIsShown(!isShown)
    }

    return (
        <div className="betInfo">
            <h2>{handlePersonID(person_id)}'s Bet History</h2>
            <p>Overall Record:</p>
            <h3>Most Recent Bet</h3>
            <h4>{description} ({odds})</h4>
            <p>Result: {result}</p>
            <p>Units Won or Lost: {units_change}</p>
            <button onClick={handleClick}>{isShown ? "See Less Bets" : `See All of ${handlePersonID(person_id)}'s bets`}</button>
            {isShown && <Table betInfo={betInfo} editBet={editBet} removeBet={removeBet}/>}
        </div>
    )
}

export default Bet