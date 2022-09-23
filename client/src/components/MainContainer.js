import React from "react";
import Bet from "./Bet";
import {useNavigate} from "react-router-dom"

function MainContainer({betData, handlePersonID}) {
    const info = betData.map((betInfo) => <Bet key={betInfo.id} betInfo={betInfo[0]} handlePersonID={handlePersonID}/>)
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