import React from "react";

function Table({betInfo, handlePersonID}) {
    const {description, odds, league, bet_type, result, units_change, person_id, segment} = betInfo[0]

    return (
        <div>
            <table>
                <tr>
                    <td>{handlePersonID(person_id)}</td>
                    <td>{description}</td>
                    <td>{odds}</td>
                    <td>{result}</td>
                    <td>{units_change}</td>
                    <td>{league}</td>
                    <td>{bet_type}</td>
                    <td>{segment}</td>
                </tr>
            </table>
        </div>
    )
}

export default Table