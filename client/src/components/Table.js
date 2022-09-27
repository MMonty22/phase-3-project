import React from "react";
import {useNavigate, useSearchParams} from "react-router-dom"

function Table({allUserData, setAllUserData}) {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const userId = searchParams.get("id")
    const [relevantPerson] = allUserData.filter(bet => String(bet.id) === String(userId))

    function navigateToEditForm(betID) {
        navigate(`/bets/edit/?id=${userId}&betID=${betID}`)
    }

    function handleDelete(betID) {
        fetch(`http://localhost:9292/people/${betID}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(deletedBet => removeBet(deletedBet))
        navigate('/')
    }

    function removeBet(betToRemove) {
        const formerUserData = allUserData.filter((individualUserData) => individualUserData.bets.id !== betToRemove.id)
        setAllUserData(formerUserData)
    }

    function navigateToBetForm() {
        navigate(`/bets/new/?id=${userId}`)
    }

    return (
        <div className="table">
            <h2>{relevantPerson.name}'s Bets</h2>
            <button id="addBetButton" onClick={navigateToBetForm}>Add A Bet</button>
            <table>
                <thead>
                    <tr>
                        <th>Bet</th>
                        <th>Odds</th>
                        <th>Result</th>
                        <th>Change in Units</th>
                        <th>League</th>
                        <th>Type of Bet</th>
                        <th>Segment</th>
                    </tr>
                </thead>
                <tbody>
                    {relevantPerson?.bets?.map(bet => (<tr>
                        <td>{bet.description}</td>
                        <td>{bet.odds}</td>
                        <td>{bet.result}</td>
                        <td>{bet.units_change}</td>
                        <td>{bet.league}</td>
                        <td>{bet.bet_type}</td>
                        <td>{bet.segment}</td>
                        <td><button onClick={() => navigateToEditForm(bet.id)}>Edit Bet</button></td>
                        <td><button onClick={() => handleDelete(bet.id)}>Delete Bet</button></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default Table