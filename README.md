## Project Name: 🚀 HustleHub
* A platform for companies and employers to display their open job positions for job seekers.


## 🙌 Acknowledgements 
* Author Name: Christopher Ngili

### Link to deployed live site: https://hustlehub-indol.vercel.app/

## Visions:

 HustleHub is a sleek and modern job listing platform that bridges the gap between employers and job seekers. Employers can effortlessly post available opportunities, while job seekers can explore and apply to positions that match their ambitions.

 ## ✨ Features:

 * 🏢 Add Job Listings: Employers can showcase job opportunities with a simple, intuitive form.

* 🔍 Browse Opportunities: Users can browse and filter through current openings.

* 📝 Job Profiles: View detailed job descriptions and contact information.

* ✅ Edit & Delete Jobs: Manage opportunities with ease using the edit and delete functionality.

* 💬 Toast Notifications: Real-time feedback with toast alerts on actions.

* 🌐 Responsive Design: Seamless experience across devices with Tailwind CSS.

## 🛠 Built with:
* Frontend: React (Vite) + Tailwind CSS

* Routing: React Router DOM

* Notifications: Sweet alert and React Toastify

* Backend API: JSON Server (Hosted on Render)

* Deployment: Vercel

## 📁 File Structure:
* Files are contained in the src folder.

* Components:
    NavBar.jsx

    JobCard.jsx

    Sort.jsx

    Footer.jsx

* Pages:
    Home.jsx

    AddJob.jsx

    About.jsx

    JobProfile.jsx

    EditJob.jsx

    ErrorPage.jsx

* Other Important Files:
    routes.jsx
    main.jsx

## 🚧 Local Setup:

1. Clone the repo:
    * git clone https://github.com/your-username/hustlehub.git
    * cd hustlehub

2. Install dependencies:
    * npm install

3. Run the app:
    * npm run dev

4. Backend:
    * The JSON server is hosted on Render.
    * To run it locally:
        npm install -g json-server
        json-server --watch db.json --port 5000

## Future Enhancements:

* Creating Admin properties.

* Creating a login feature.

* Integrating a direct contact system to open companies.

* Auto-delete for listings whose deadlines have passed.