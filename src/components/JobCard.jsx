import { Link } from "react-router-dom";

function JobCard({ opportunity }){
    if(!opportunity){
        return<div>Not found</div>
    }
    return(
        <div>
            <h2> Title: { opportunity.jobTitle }</h2>
            <p>Company: {opportunity.company }</p>
            <p>Slots: { opportunity.slots }</p>
            <p>{new Date(opportunity.applicationsDeadline).toLocaleDateString()}</p>
            <p>Contacts: { opportunity.contacts }</p>
            <p>Status: { opportunity.status }</p>
            <Link to={`/job/${opportunity.id}`}>View Details</Link>
        </div>
    )
}
export default JobCard