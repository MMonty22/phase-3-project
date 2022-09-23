import React from "react";
import Person from "./Person";
import {useNavigate} from "react-router-dom"

function MainContainer({bets}) {
    const info = bets.map((betInfo) => <Person key={betInfo.id} betInfo={betInfo} />)
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