import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import JobCard from "../components/JobCard";
import Sort from "../components/Sort";

function Home() {
    const [opportunities, setOpportunity] = useState([]);

    useEffect(() => {
        fetch("https://hustlehub-rc5s.onrender.com/opportunities")
        .then(r => r.json())
        .then(data => setOpportunity(data))
        .catch(error => console.error(error));
    }, []);

    function handleDelete(deletedJob){
        const refreshedJobs = opportunities.filter((opportunity) => opportunity.id !== deletedJob.id)
        setOpportunity(refreshedJobs)
    }
    function handleEdit(editedJob){
        const updatedJob = opportunities.map((opportunity) => {
            if(opportunity.id === editedJob.id){
                return editedJob
            }else{
                return opportunity
            }
        })
        setOpportunity(updatedJob)
    }

    const jobList = opportunities.map(opportunity => {
        return <JobCard key={opportunity.id} opportunity={opportunity} onUpdateJob={handleEdit} onDeleteJob={handleDelete} />;
    });


    return (
        <div className="min-h-screen bg-gray-50">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Available Opportunities
                </h1>
                <div>
                    <Sort opportunities={opportunities} setOpportunity={setOpportunity}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobList}
                </div>
                
                {!opportunities.length && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No opportunities found</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Home;