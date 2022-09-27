import React, {useState} from "react";
import {useSearchParams, useNavigate} from "react-router-dom"

function Form({addBet}) {
    const [searchParams] = useSearchParams()
    const userID = searchParams.get("id")
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        description: "",
        odds: "",
        league: "",
        result: "",
        bet_type: "",
        units_change: "",
        segment: ""
    })

    function handleSubmit(event) {
        event.preventDefault()
        const newBetObj = {
            description: formData.description,
            odds: formData.odds,
            league: formData.league,
            result: formData.result,
            units_change: formData.units_change,
            bet_type: formData.bet_type,
            segment: formData.segment
        }
        fetch(`http://localhost:9292/people/${userID}/bets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBetObj)
        })
        .then(res => res.json())
        .then(data => addBet(data, userID))
        navigate(`/bets/?id=${userID}`)
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        })
    }

    return (
        <div className="betForm">
            <h2>Add A Bet</h2>
            <form onSubmit={handleSubmit}>
                <label>Bet Descrption</label>
                <input id="description" type="text" name="bet" placeholder="Ex: Cubs Moneyline vs White Sox" value={formData.description} onChange={handleChange}></input>
                <label>Odds</label>
                <input id="odds" type="text" name="odds" placeholder="-110" value={formData.odds} onChange={handleChange}></input>
                <label>League</label>
                <input id="league" type="text" name="league" placeholder="MLB" value={formData.league} onChange={handleChange}></input>
                <label>Result</label>
                <input id="result" type="text" name="result" placeholder="Leave blank if no result" value={formData.result} onChange={handleChange}></input>
                <label>Units Won or Lost</label>
                <input id="units_change" type="text" name="units_change" placeholder="Ex: +1.3 or -1.15" value={formData.units_change} onChange={handleChange}></input>
                <label>Type of Bet</label>
                <input id="bet_type" type="text" name="bet_type" placeholder="Ex: Spread or Moneyline or Total etc." value={formData.bet_type} onChange={handleChange}></input>
                <label>Segment</label>
                <input id="segment" type="text" name="segment" placeholder="Ex: Take It to the Bank" value={formData.segment} onChange={handleChange}></input>
                <button id="submitBetButton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form