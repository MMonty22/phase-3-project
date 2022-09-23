import React from "react";
import {useNavigate} from "react-router-dom"

function Table({betData, handleRemoveBet}) {
    const navigate = useNavigate()
    const info = betData.map((betInfo) => betInfo={betInfo})
    const {description, odds, league, bet_type, result, units_change, segment} = info.betInfo[0]
    console.log('infoBets[0]', info.betInfo[0])

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
                    <tr>
                        <td>{description}</td>
                        <td>{odds}</td>
                        <td>{result}</td>
                        <td>{units_change}</td>
                        <td>{league}</td>
                        <td>{bet_type}</td>
                        <td>{segment}</td>
                        <td><button onClick={navigateToEditForm}>Edit Bet</button></td>
                        <td><button onClick={handleDelete}>Delete Bet</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table