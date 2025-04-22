import { Link } from "react-router-dom";

function JobCard({ opportunity }){
    return(
        <div>
            <h2>{ opportunity.title }</h2>
            <p>{opportunity.company }</p>
            <p>{ opportunity.slots }</p>
            <p>{ opportunity.deadline }</p>
            <p>{ opportunity.contact }</p>
            <p>{ opportunity.status }</p>
            <Link to={`/opportunity/${opportunity.id}`}>View Profile</Link>
        </div>
    )
}
export default JobCard