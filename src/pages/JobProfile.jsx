import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JobProfile(){
    const [opportunity, setOpportunity] = useState({});
    const params = useParams()
    const opportunityId = params.id;

    useEffect(() => {
        fetch(`https://hustlehub-rc5s.onrender.com/opportunities/${opportunityId}`)
        .then(r => r.json())
        .then(data => setOpportunity(data))
        .catch(err => console.error(err))
    }, [opportunityId])


}

export default JobProfile;