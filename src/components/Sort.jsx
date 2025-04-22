import React from "react";

function Sort({ onSortChange }){
    function handleChange(e){
        const sortBy = e.target.value
        onSortChange(sortBy)
    }
    return (
        <div>
            <label>Sort by: </label>
            <select onChange={handleChange}>
                <option value="">Select</option>
                <option value="deadline">Deadline</option>
                <option value="company">Company Name</option>
                <option value="slots">Slots</option>
            </select>
        </div>
    )
}

export default Sort