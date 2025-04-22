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
    return
}

export default AddJob;