import React from "react";
import Person from "./Person";

function MainContainer({allUserData}) {
    const info = allUserData.map((individualUserData) => <Person key={individualUserData.id} individualUserData={individualUserData} bets={individualUserData.bets}/>)

    return (
        <div>
            <ul>{info}</ul>
        </div>
    )
}

export default MainContainer