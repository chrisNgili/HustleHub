import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function EditJob() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        jobTitle: "",
        company: "",
        slots: "",
        deadline: "",
        contacts: "",
        status: "",
        description: ""
    });

    useEffect(() => {
        fetch(`https://hustlehub-rc5s.onrender.com/opportunities/${id}`)
            .then((r) => r.json())
            .then((data) => {
                setFormData(data);
            });
    }, [id]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`https://hustlehub-rc5s.onrender.com/opportunities/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then(() => {
            navigate("/");
        });
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />
            <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-xl mt-8">
                <h2 className="text-2xl font-bold mb-6">Edit Opportunity</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" className="w-full p-2 border rounded" />
                    <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="w-full p-2 border rounded" />
                    <input name="slots" value={formData.slots} onChange={handleChange} type="number" placeholder="Slots" className="w-full p-2 border rounded" />
                    <input name="deadline" value={formData.deadline} onChange={handleChange} type="date" className="w-full p-2 border rounded" />
                    <input name="contacts" value={formData.contacts} onChange={handleChange} placeholder="Contacts" className="w-full p-2 border rounded" />
                    <input name="status" value={formData.status} onChange={handleChange} placeholder="Status" className="w-full p-2 border rounded" />
                    <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" />
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Update</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default EditJob;
