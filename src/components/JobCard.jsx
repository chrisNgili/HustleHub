import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'


function JobCard({ opportunity, onDelete }) {
    if (!opportunity) {
        return <div className="text-center text-gray-500">Not found</div>
    }
   
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(id); 
                Swal.fire(
                    'Deleted!',
                    'The job opportunity has been deleted.',
                    'success'
                );
            }
        });
    };

    return (
        <div className="bg-orange-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between">
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">Title: {opportunity.jobTitle}</h2>
                <p className="text-gray-600">Company: {opportunity.company}</p>
                <p className="text-gray-600">Slots: {opportunity.slots}</p>
                <p className="text-gray-600">Deadline: {new Date(opportunity.deadline).toLocaleDateString()}</p>
                <p className="text-gray-600">Contacts: {opportunity.contacts}</p>  
                <p className="text-gray-600">Status: {opportunity.status}</p>
            </div>
            <div className="mt-4 flex justify-between gap-2">
                <Link 
                    to={`/job/${opportunity.id}`} 
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                    View Details
                </Link>
                <Link
                    to={`/edit/${opportunity.id}`}
                    className="ml-1 inline-block px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-medium hover:bg-yellow-700"
                >
                    Edit
                </Link>

                <button 
                    onClick={() => handleDelete(opportunity.id)} 
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-900 transition"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default JobCard
