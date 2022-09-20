import React, {useState} from "react";

function Form() {
    const [formData, setFormData] = useState({
        personName: "",
        bet: "",
        odds: "",
        league: "",
        result: "",
        unitsChange: "",
        segment: ""
    })
    const [checked, setChecked] = useState(false)


    return (
        <div className="form">
            <h2>Add A Bet</h2>
            <form>
                <label>Person</label>
                <input id="personName" type="text" name="name" placeholder="Person's Name" value={formData.personName} onChange={}></input>
                <label>Bet</label>
                <input id="bet" type="text" name="bet" placeholder="Ex: Cubs Moneyline vs White Sox" value={formData.bet} onChange={}></input>
                <label>Odds</label>
                <input id="odds" type="text" name="odds" placeholder="-110" value={formData.odds} onChange={}></input>
                <label>League</label>
                <input id="league" type="text" name="league" placeholder="MLB" value={formData.league} onChange={}></input>
                <label>Result</label>
                <input id="result" type="text" name="result" placeholder="Leave blank if no result" value={formData.result} onChange={}></input>
                <label>Units Won or Lost</label>
                <input id="unitsChange" type="text" name="units_change" placeholder="Ex: +1.3 or -1.15" value={formData.unitsChange} onChange={}></input>
                <label>Segment</label>
                <input id="segment" type="text" name="segment" placeholder="Ex: Take It to the Bank" value={formData.segment} onChange={}></input>
                <label>Add Another Bet?</label>
                <input id="checkbox" type="checkbox" checked={checked} onChange={}></input>
            </form>
        </div>
    )
}

export default Form