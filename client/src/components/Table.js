import React from "react";

function Table({betInfo, handleRemoveBet, navigate}) {
    const {description, odds, league, bet_type, result, units_change, segment} = betInfo

    function navigateToEditForm() {
        navigate('/EditForm')
    }

    function handleDelete() {
        handleRemoveBet(betInfo)
    }

    return (
        <div className="table">
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
                    </tr>
                </tbody>
            </table>
            <button onClick={navigateToEditForm}>Edit Bet</button>
            <button onClick={handleDelete}>Delete Bet</button>
        </div>
    )
}

export default Table