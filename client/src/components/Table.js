import React from "react";

function Table({betInfo}) {
    const {description, odds, league, bet_type, result, units_change, person_id, segment} = betInfo[0]

    return (
        <div>
            <table>
                <tr>
                    <td>{description}</td>
                    <td>{odds}</td>
                    <td>{league}</td>
                    <td>{bet_type}</td>
                    <td>{result}</td>
                    <td>{units_change}</td>
                    <td>{segment}</td>
                </tr>
            </table>
        </div>
    )
}

export default Table