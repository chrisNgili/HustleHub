import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-lg font-semibold mb-2">Explore</h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/addjob")}
                  className="text-gray-300 hover:text-white transition"
                >
                  Add Job
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="text-gray-300 hover:text-white transition"
                >
                  About
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-300 text-sm">Email: support@hustlehub.com</p>
            <p className="text-gray-300 text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} HustleHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
