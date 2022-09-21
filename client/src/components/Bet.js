import React, {useState} from "react";
import Table from "./Table";

function Bet({betInfo, handlePersonID}) {
    const {description, odds, result, units_change, person_id} = betInfo
    const [isShown, setIsShown] = useState(false)

    function handleClick() {
        setIsShown(!isShown)
    }

    return (
        <div className="betInfo">
            <h2>{handlePersonID(person_id)}'s Most Recent Bet</h2>
            <h3>{description} ({odds})</h3>
            <p>Result: {result}</p>
            <p>Units Won or Lost: {units_change}</p>
            <button onClick={handleClick}>{isShown ? "See Less Bets" : `See All of ${handlePersonID(person_id)}'s bets`}</button>
            {isShown && <Table betInfo={betInfo}/>}
        </div>
    )
}

export default Bet