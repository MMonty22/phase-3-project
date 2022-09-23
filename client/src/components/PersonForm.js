import React, {useState} from "react";

function PersonForm({addBet}) {
    const [personName, setPersonName] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:9292/people', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({personName: personName})
        })
        .then(res => res.json())
        .then(data => addBet(data))
    }

    function handleChange(event) {
        setPersonName(event.target.value)
    }

    return (
        <div>
            <h2>Add A Person</h2>
            <form onSubmit={handleSubmit}>
                <label>Person</label>
                <input id="personName" type="text" name="name" placeholder="Person's Name" value={personName} onChange={handleChange}></input>
                <button type="submit">Add Person</button>
            </form>
        </div>
    )
}

export default PersonForm