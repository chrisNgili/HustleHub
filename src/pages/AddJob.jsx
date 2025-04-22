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
        <div className="min-h-screen bg-gray-50">
            <NavBar />
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Add New Job Opportunity</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input type="text" name="title" value={title} placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company</label>
                            <input type="text" name="company" value={company} placeholder="Enter Company Name" onChange={(e) => setCompany(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Slots</label>
                            <input type="number" name="number" value={slots} placeholder="Enter slots left" onChange={(e) => setSlots(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Deadline</label>
                            <input type="date" name="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contact</label>
                            <input type="email" name="contact" value={contact} placeholder="Enter contact" onChange={(e) => setContact(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Status</label>
                            <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                                <option value="">Select Status</option>
                                <option value="Open">Open</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea name="description" value={description} placeholder="Enter Job description" onChange={(e) => setDescription(e.target.value)} rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200">Add to Job List</button>
                </div>
            </form>
        </div>    
    )
}

export default AddJob;