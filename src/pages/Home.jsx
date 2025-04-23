import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import JobCard from "../components/JobCard";
import Sort from "../components/Sort";
import Footer from "../components/Footer";
import gif from "../images/Hiring No Money GIF by INTO ACTION.gif"

function Home() {
    const [opportunities, setOpportunity] = useState([]);

    useEffect(() => {
        fetch("https://hustlehub-rc5s.onrender.com/opportunities")
        .then(r => r.json())
        .then(data => setOpportunity(data))
        .catch(error => console.error(error));
    }, []);
    function handleDelete(id) {
        fetch(`https://hustlehub-rc5s.onrender.com/opportunities/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            const updated = opportunities.filter((op) => op.id !== id);
            setOpportunity(updated);
        }).then(() =>{
            
        })
        .catch((err) => console.error(err));
    }
 

    const jobList = opportunities.map(opportunity => {
        return <JobCard key={opportunity.id} opportunity={opportunity} onDelete={handleDelete}   />;
    });


    return (
        <div className="flex flex-col min-h-screen bg-green-100">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>
            <div className="flex justify-center mb-6 w-full">
                <img src={gif} alt="Animated Image" width={300} height={300}/>
            </div>
            <div className="bg-gradient-to-r from-emerald-300 to-green-500 py-12 px-4 sm:px-6 rounded-xl shadow-lg">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Welcome to  <span className="bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent">HustleHub</span>!
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 font-medium">
                    A platform where employers showcase job opportunities and job seekers connect with their next big break.
                    </p>
                </div>
            </div>
            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            <Footer />
        </div>
    );
}

export default Home;