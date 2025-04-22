import NavBar from "../components/NavBar";
import React,{ useState } from "react";

function AddJob( {onAddJob} ){
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [slots, setSlots] = useState("");
    const [deadline, setDeadline] = useState("");
    const [contact, setContact] = useState("");
    const [status, setStatus] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e){
        e.preventDefault()
        const newJob = {
            title,
            company,
            slots,
            deadline,
            contact,
            status,
            description
        };
        fetch("https://hustlehub-rc5s.onrender.com/opportunities",{
            method:"POST",
            headers:{
                "Content-type" : "application/json",
            },
            body: JSON.stringify(newJob),
        })
        .then((r) => r.json())
        .then((data) =>onAddJob(data))
    }
    return(
        <div>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <label>Title:
                    <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Enter Title"
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>Company:
                    <input
                    type="text"
                    name="company"
                    value={company}
                    placeholder="Enter Company Name"
                    onChange={(e) => setCompany(e.target.value)}
                    />
                </label>
                <label>Slots:
                    <input
                    type="number"
                    name="number"
                    value={slots}
                    placeholder="Enter slots left"
                    onChange={(e) => setSlots(e.target.value)}
                    />
                </label>
                <label>Deadline:
                    <input
                    type="number"
                    name="deadline"
                    value={deadline}
                    placeholder="Enter deadline"
                    onChange={(e) => setDeadline(e.target.value)}
                    />
                </label>
                <label>Contact:
                    <input
                    type="text"
                    name="contact"
                    value={contact}
                    placeholder="Enter contact"
                    onChange={(e) => setContact(e.target.value)}
                    />
                </label>
                <label>Status:
                    <input
                    type="text"
                    name="status"
                    value={status}
                    placeholder="Enter status"
                    onChange={(e) => setStatus(e.target.value)}
                    />
                </label>
                <label>Description:
                    <input
                    type="text"
                    name="description"
                    value={description}
                    placeholder="Enter Job description"
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <button type ="submit">Add to Job List</button>
            </form>
        </div>    
    )
}

export default AddJob;