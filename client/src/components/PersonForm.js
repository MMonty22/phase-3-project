import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

function PersonForm({addBet}) {
    const [name, setName] = useState("")
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:9292/people', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: name}),
        })
        .then(res => res.json())
        .then(newPerson => addBet(newPerson))
        navigate("/")
    }

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <div>
            <h2>Add A Person</h2>
            <form onSubmit={handleSubmit}>
                <label></label>
                <input id="personName" type="text" name="name" placeholder="Person's Name" value={name} onChange={handleChange}></input>
                <button id="submitPersonButton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PersonForm