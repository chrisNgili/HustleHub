import NavBar from "../components/NavBar";
import React, { useState } from "react";

function AddJob({ onAddJob }) {
    const [jobTitle, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [slots, setSlots] = useState("");
    const [deadline, setDeadline] = useState("");
    const [contacts, setContact] = useState("");
    const [status, setStatus] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const newJob = {
            jobTitle,
            company,
            slots: parseInt(slots),
            deadline,
            contacts,
            status,
            description
        };
        fetch("https://hustlehub-rc5s.onrender.com/opportunities", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newJob),
        })
            .then((r) => r.json())
            .then((data) => {
                onAddJob(data);
                setTitle("");
                setCompany("");
                setSlots("");
                setDeadline("");
                setContact("");
                setStatus("");
                setDescription("");
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />
            <div className="max-w-3xl mx-auto py-10 px-6 bg-white shadow-md rounded-xl mt-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Add a Job Opportunity</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={jobTitle}
                            placeholder="Enter Title"
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company</label>
                        <input
                            type="text"
                            name="company"
                            value={company}
                            placeholder="Enter Company Name"
                            onChange={(e) => setCompany(e.target.value)}
                            className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Slots</label>
                        <input
                            type="number"
                            name="slots"
                            value={slots}
                            placeholder="Enter slots left"
                            onChange={(e) => setSlots(e.target.value)}
                            className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contact</label>
                        <input
                            type="email"
                            name="contact"
                            value={contacts}
                            placeholder="Enter contact"
                            onChange={(e) => setContact(e.target.value)}
                            className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <input
                            type="text"
                            name="status"
                            value={status}
                            placeholder="Enter status"
                            onChange={(e) => setStatus(e.target.value)}
                            className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            placeholder="Enter Job description"
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                    >
                        Add to Job List
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddJob;
