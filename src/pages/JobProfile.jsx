import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JobProfile() {
    const [opportunity, setOpportunity] = useState(null); 
    const params = useParams();
    const opportunityId = params.id;

    useEffect(() => {
        fetch(`https://hustlehub-rc5s.onrender.com/opportunities/${opportunityId}`)
            .then(r => r.json())
            .then(data => setOpportunity(data))
            .catch(err => console.error(err));
    }, [opportunityId]);

    
    if (!opportunity) {
        return <h1>Loading...</h1>;
    }

    
    if (!opportunity.jobTitle) { 
        return <h1>Job opportunity not found</h1>;
    }

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>{opportunity.jobTitle}</h1> 
                <div className="job-details">
                    <p>Company: {opportunity.company}</p>
                    <p>Open Slots: {opportunity.slots}</p>
                    <p>Deadline: {new Date(opportunity.applicationsDeadline).toLocaleDateString()}</p>
                    <p>Contact: {opportunity.contacts}</p>
                    <p>Status: {opportunity.status}</p>
                    <p>Description: {opportunity.description}</p>
                </div>
            </main>
        </>
    );
}

export default JobProfile;