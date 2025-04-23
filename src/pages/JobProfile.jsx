import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

function JobProfile() {
    const [opportunity, setOpportunity] = useState(null);
    const params = useParams();
    const opportunityId = params.id;

    useEffect(() => {
        fetch(`https://hustlehub-rc5s.onrender.com/opportunities/${opportunityId}`)
            .then((r) => r.json())
            .then((data) => setOpportunity(data))
            .catch((err) => console.error(err));
    }, [opportunityId]);

    if (!opportunity) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-xl font-semibold text-gray-600">Loading...</h1>
            </div>
        );
    }

    if (!opportunity.jobTitle) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-xl font-semibold text-red-500">Job opportunity not found</h1>
            </div>
        );
    }

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className="min-h-screen bg-gray-100 py-10 px-4">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Job Profile:</h1>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{opportunity.jobTitle}</h2>
                    <div className="space-y-4 text-gray-700">
                        <p><span className="font-semibold">Company:</span> {opportunity.company}</p>
                        <p><span className="font-semibold">Open Slots:</span> {opportunity.slots}</p>
                        <p><span className="font-semibold">Deadline:</span> {new Date(opportunity.applicationsDeadline).toLocaleDateString()}</p>
                        <p><span className="font-semibold">Contact:</span> {opportunity.contacts}</p>
                        <p><span className="font-semibold">Status:</span> {opportunity.status}</p>
                        <p><span className="font-semibold">Description:</span> {opportunity.description}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default JobProfile;
