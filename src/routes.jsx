import React from "react"
import Home from "./pages/Home"
import AddJob from "./pages/AddJob"
import About from "./pages/About" 
import JobProfile from "./pages/JobProfile"
import ErrorPage from "./pages/Errorpage"
import EditJob from "./pages/EditJob"

const routes =[
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/addjob",
        element: <AddJob />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
    },
    {
        path: "/job/:id",
        element: <JobProfile />,
        errorElement: <ErrorPage />
    },
    {
        path: "/edit/:id",
        element: <EditJob />,
        errorElement: <ErrorPage />
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]

export default routes