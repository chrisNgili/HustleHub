import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import JobCard from "../components/JobCard";

function Home(){
    const [opportunities, setOpportunity]=useState([])

    useEffect(() => {
        fetch("https://hustlehub-rc5s.onrender.com/opportunities")
    })
}