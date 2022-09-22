import React, {useState} from "react";

function EditForm({editBet, betID}) {
    const [editFormData, setEditFormData] = useState({
        personName: "",
        bet: "",
        odds: "",
        league: "",
        result: "",
        unitsChange: "",
        betType: "",
        segment: ""
    })

    function handleChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.id]: event.target.value,
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        const editedBetObj = {
            person: editFormData.personName,
            bet: editFormData.bet,
            odds: editFormData.odds,
            league: editFormData.league,
            result: editFormData.result,
            unitsChange: editFormData.unitsChange,
            betType: editFormData.betType,
            segment: editFormData.segment
        }
        fetch(`http://localhost:9292/people/${betID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedBetObj)
        })
        .then(res => res.json())
        .then(data => editBet(data))
    }

    return (
        <div className="editForm">
            <h2>Edit Bet</h2>
            <form onSubmit={handleSubmit}>
                <label>Person</label>
                <input id="personName" type="text" name="name" placeholder="Person's Name" value={editFormData.personName} onChange={handleChange}></input>
                <label>Bet</label>
                <input id="bet" type="text" name="bet" placeholder="Ex: Cubs Moneyline vs White Sox" value={editFormData.bet} onChange={handleChange}></input>
                <label>Odds</label>
                <input id="odds" type="text" name="odds" placeholder="-110" value={editFormData.odds} onChange={handleChange}></input>
                <label>League</label>
                <input id="league" type="text" name="league" placeholder="MLB" value={editFormData.league} onChange={handleChange}></input>
                <label>Result</label>
                <input id="result" type="text" name="result" placeholder="Leave blank if no result" value={editFormData.result} onChange={handleChange}></input>
                <label>Units Won or Lost</label>
                <input id="unitsChange" type="text" name="units_change" placeholder="Ex: +1.3 or -1.15" value={editFormData.unitsChange} onChange={handleChange}></input>
                <label>Type of Bet</label>
                <input id="betType" type="text" name="betType" placeholder="Ex: Spread or Moneyline or Total etc." value={editFormData.betType} onChange={handleChange}></input>
                <label>Segment</label>
                <input id="segment" type="text" name="segment" placeholder="Ex: Take It to the Bank" value={editFormData.segment} onChange={handleChange}></input>
                <button type="submit">Add Bet</button>
            </form>
        </div>
    )
}

export default EditForm