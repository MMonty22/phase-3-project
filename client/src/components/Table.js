import React from "react";
import {useNavigate, useSearchParams} from "react-router-dom"

function Table({bets, handleRemoveBet}) {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const userId = searchParams.get("id")
    const info = bets.map((betInfo) => betInfo={betInfo})
    
    const [relevantPerson] = bets.filter(bet => String(bet.id) === String(userId))

    function navigateToEditForm() {
        navigate('/bets/edit')
    }

    function handleDelete() {
        handleRemoveBet(info.betInfo[0])
    }

    function handleClick() {
        navigate('/bets/new')
    }

    return (
        <div className="table">
            <button onClick={handleClick}>Add Bets</button>
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
                        <td><button onClick={navigateToEditForm}>Edit Bet</button></td>
                        <td><button onClick={handleDelete}>Delete Bet</button></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default Table