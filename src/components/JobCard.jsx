import { Link } from "react-router-dom";

function JobCard({ opportunity, onDeleteJob, onUpdateJob }) {
    if (!opportunity) {
        return <div className="text-center text-gray-500">Not found</div>
    }
    function handleDelete(){
        fetch(`https://hustlehub-rc5s.onrender.com/opportunities/${opportunityId}`,{
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDeleteJob(opportunity))
    }
    function handleEdit(){
        fetch(`https://hustlehub-rc5s.onrender.com/opportunities/${opportunityId}`, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
            },
            body: Json.stringify({})
        })
    }
    
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between">
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">Title: {opportunity.jobTitle}</h2>
                <p className="text-gray-600">Company: {opportunity.company}</p>
                <p className="text-gray-600">Slots: {opportunity.slots}</p>
                <p className="text-gray-600">Deadline: {new Date(opportunity.deadline).toLocaleDateString()}</p>
                <p className="text-gray-600">Contacts: {opportunity.contacts}</p>  
                <p className="text-gray-600">Status: {opportunity.status}</p>
            </div>
            <div className="mt-4">
                <Link 
                    to={`/job/${opportunity.id}`} 
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                    View Details
                </Link>
            </div>
        </div>
    )
}
export default JobCard
