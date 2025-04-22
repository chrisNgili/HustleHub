import Home from "./pages/Home"
import AddJob from "./pages/AddJob"
import About from "./pages/About" 
import JobProfile from "./pages/JobProfile"

const routes =[
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/addjob",
        element: <AddJob />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/job/:id",
        element: <JobProfile />
    }
]

export default routes