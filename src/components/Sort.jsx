import React from "react";

function Sort({ opportunities, setOpportunity }){
    function handleChange(e){
        const sortBy = e.target.value
        const sorted = [...opportunities].sort((a,b) => {
            if (sortBy === "deadline") return new Date(a.deadline) - new Date(b.deadline);
            if(sortBy === "company") return a.company.localeCompare(b.company);
            if(sortBy === "slots") return parseInt(b.slots)- parseInt(a.slots);
            return 0
        })
        setOpportunity(sorted)
    }
    return (
        <div>
            <label>Sort by: </label>
            <select onChange={handleChange}>
                <option value="">Select</option>
                <option value="deadline">Deadline</option>
                <option value="company">Company Name (A-Z)</option>
                <option value="slots">Slots</option>
            </select>
        </div>
    )
}

export default Sort