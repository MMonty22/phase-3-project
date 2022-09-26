import React, {useState} from "react";
import {useSearchParams, useNavigate} from "react-router-dom"

function EditForm({allUserData, setAllUserData}) {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const betID = searchParams.get("betID")
    const userID = searchParams.get("id")
    const relevantPerson = allUserData.find(user => String(user.id) === String(userID))
    const relevantBet = relevantPerson.bets.find(bet => String(bet.id) === String(betID))

    const [editFormData, setEditFormData] = useState({
        description: relevantBet.description,
        odds: relevantBet.odds,
        league: relevantBet.league,
        result: relevantBet.result,
        units_change: relevantBet.units_change,
        bet_type: relevantBet.bet_type,
        segment: relevantBet.segment
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
            description: editFormData.description,
            odds: editFormData.odds,
            league: editFormData.league,
            result: editFormData.result,
            units_change: editFormData.units_change,
            bet_type: editFormData.bet_type,
            segment: editFormData.segment
        }
        fetch(`http://localhost:9292/people/${userID}/${betID}`, { 
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedBetObj)
        })
        .then(res => res.json())
        .then(data => editBet(data))
        navigate("/")
    }

    function editBet(editedBet) {
        const editedUserData = [...allUserData, editedBet]
        setAllUserData(editedUserData)
    }

    return (
        <div className="editForm">
            <h2>Edit Bet</h2>
            <form onSubmit={handleSubmit}>
                <label>Bet</label>
                <input id="description" type="text" name="description" value={editFormData.description} onChange={handleChange}></input>
                <label>Odds</label>
                <input id="odds" type="text" name="odds" value={editFormData.odds} onChange={handleChange}></input>
                <label>League</label>
                <input id="league" type="text" name="league" value={editFormData.league} onChange={handleChange}></input>
                <label>Result</label>
                <input id="result" type="text" name="result" value={editFormData.result} onChange={handleChange}></input>
                <label>Units Won or Lost</label>
                <input id="units_change" type="text" name="units_change" value={editFormData.units_change} onChange={handleChange}></input>
                <label>Type of Bet</label>
                <input id="bet_type" type="text" name="bet_type" value={editFormData.bet_type} onChange={handleChange}></input>
                <label>Segment</label>
                <input id="segment" type="text" name="segment" value={editFormData.segment} onChange={handleChange}></input>
                <button type="submit">Submit Edit</button>
            </form>
        </div>
    )
}

export default EditForm