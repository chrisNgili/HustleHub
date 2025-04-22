import React from "react";
import NavBar from "../components/NavBar";

function About() {
    return(
        <div className="min-h-screen bg-gray-50">
            <header>
                <NavBar />
            </header>
            <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">About Us</h1>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        HustleHub is a professional platform enabling employers to display open positions to prospective job seekers, streamlining hiring and applications. This user-friendly system supports career growth through opportunity discovery and progress tracking.
                    </p>
                </div>
            </main>
        </div>
    )
}

export default About;