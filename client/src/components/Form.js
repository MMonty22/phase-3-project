import React, {useState} from "react";

function Form() {

    return (
        <div className="form">
            <h2>Add A Bet</h2>
            <form>
                <label>Person</label>
                <input type="text" name="name" placeholder="Person's Name" value={} onChange={}></input>
                <label>Bet</label>
                <input type="text" name="bet" placeholder="Ex: Cubs Moneyline vs White Sox" value={} onChange={}></input>
                <label>Odds</label>
                <input type="text" name="odds" placeholder="-110" value={} onChange={}></input>
                <label>League</label>
                <input type="text" name="league" placeholder="MLB" value={} onChange={}></input>
                <label>Result</label>
                <input type="text" name="result" placeholder="Leave blank if no result" value={} onChange={}></input>
                <label>Units Won or Lost</label>
                <input type="text" name="units_change" placeholder="Ex: +1.3 or -1.15" value={} onChange={}></input>
                <label>Segment</label>
                <input type="text" name="segment" placeholder="Ex: Take It to the Bank" value={} onChange={}></input>
                <label>Add Another Bet?</label>
                <input id="checkbox" type="checkbox" checked={} onChange={}></input>
            </form>
        </div>
    )
}

export default Form