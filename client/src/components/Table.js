import React from "react";

function Table({betInfo}) {
    const {description, odds, league, bet_type, result, units_change, segment} = betInfo

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
        </div>
    )
}

export default Table