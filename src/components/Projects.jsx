import React from "react";
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="max-w-3xl mx-auto text-center py-10">
      <h2 className="text-3xl font-bold">Projects</h2>
      
      <ul className="mt-6 space-y-4">
        <li className="border p-4 rounded shadow-md">🔹 <Link to="https://Ven-Sib.github.io/your-repository/" className="text-white">MovieSite preview</Link></li>
        <h2 className="text-3xl font-bold">This movie site app is a dynamic platform that allows users to browse, search, and explore movies with detailed information, including ratings, genres, and summaries. Built with React, it provides a seamless user experience, featuring real-time updates, personalized recommendations, and an intuitive UI. Designed for movie enthusiasts, the app ensures easy navigation and a rich database of films, making it the perfect tool for discovering and tracking movies.</h2>
      </ul>
    </div>
  );
}

export default Projects;
