import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

function Person({ individualUserData, bets }) {
    const navigate = useNavigate()
    const [mostRecentBet, setmostRecentBet] = useState()

    useEffect(() => {
        const recents = bets?.sort((a,b) => ((new Date(b.created_at) - new Date(a.created_at))))
        if (recents) {
            setmostRecentBet(recents[0])}
    }, [mostRecentBet, bets, individualUserData])

    function navigateToTable() {
        navigate(`/bets/?id=${individualUserData.id}`)
    }

    return (
        <div className="person">
            <h2>{individualUserData.name}'s Bet History</h2>
            <h3>Most Recent Bet</h3>
            <h4>{mostRecentBet?.description} ({mostRecentBet?.odds})</h4>
            <p>Result: {mostRecentBet?.result}</p>
            <p>Units Won or Lost: {mostRecentBet?.units_change}</p>
            <button onClick={navigateToTable}>{`See All of ${individualUserData.name}'s bets`}</button>
        </div>
    )
}

export default Person