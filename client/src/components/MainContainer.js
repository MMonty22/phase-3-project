import React from "react";
import Person from "./Person";

function MainContainer({allUserData}) {
    const info = allUserData.map(function(individualUserData){
        //console.log('individualUserData', individualUserData)
        //console.log('bets', individualUserData.bets)
        return <Person key={individualUserData.bets[0].id} individualUserData={individualUserData} bets={individualUserData.bets}/>
    })

    return (
        <div>
            <ul>{info}</ul>
        </div>
    )
}

export default MainContainer