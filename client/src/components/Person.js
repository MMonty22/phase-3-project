import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

function Person({ individualUserData, bets }) {
    const navigate = useNavigate()
    const [mostRecentBet, setmostRecentBet] = useState()

    useEffect(() => {
        const compareDates = (date1, date2) => {
            if (date1 > date2) return 1
            if (date2 > date1) return -1
            return 0
        }
        const recents = bets.sort((a,b) => (compareDates(new Date(a.updated_at), new Date(b.updated_at))))
        //console.log('recents', recents)
        return setmostRecentBet(recents[0])
    }, [mostRecentBet, bets])
    //how do I get to sort by bet.updated_at, what i have above does nothing

    function navigateToTable() {
        navigate(`/bets/?id=${individualUserData.id}`)
    }

    return (
        <div className="betInfo">
            <h2>{individualUserData.name}'s Bet History</h2>
            <p>Overall Record:</p>
            <h3>Most Recent Bet</h3>
            <h4>{mostRecentBet?.description} ({mostRecentBet?.odds})</h4>
            <p>Result: {mostRecentBet?.result}</p>
            <p>Units Won or Lost: {mostRecentBet?.units_change}</p>
            <button onClick={navigateToTable}>{`See All of ${individualUserData.name}'s bets`}</button>
        </div>
    )
}

export default Person