import React from "react";
import Person from "./Person";
import {useNavigate} from "react-router-dom"

function MainContainer({allUserData}) {
    const info = allUserData.map(function(individualUserData){
        //console.log('individualUserData', individualUserData)
        //console.log('bets', individualUserData.bets)
        return <Person key={individualUserData.name} individualUserData={individualUserData} bets={individualUserData.bets}/>
    })
    const navigate = useNavigate()

    function navigateToPersonForm() {
        navigate('/person/new')
    }

    return (
        <div>
            <button onClick={navigateToPersonForm}>Add a Person</button>
            <ul>{info}</ul>
        </div>
    )
}

export default MainContainer