import React from "react";
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="max-w-3xl mx-auto text-center py-10">
      <h2 className="text-3xl font-bold">Projects</h2>
      <li className="border p-4 rounded shadow-md">🔹 <a href="https://Ven-Sib.github.io/your-repository/">Moviesite</a></li>
      <ul className="mt-6 space-y-4">
      
        <h2 className="text-3xl font-bold">This movie site app is a dynamic platform that allows users to browse, search, and explore movies with detailed information, including ratings, genres, and summaries. Built with React, it provides a seamless user experience, featuring real-time updates, personalized recommendations, and an intuitive UI. Designed for movie enthusiasts, the app ensures easy navigation and a rich database of films, making it the perfect tool for discovering and tracking movies.</h2>
      </ul>
      <li className="border p-4 rounded shadow-md">🔹 <a href="https://youtu.be/q6cwcvhQ4-U">University Registration System</a></li>
      <ul className="mt-6 space-y-4">
      
        <h2 className="text-3xl font-bold">The University Course Registration System is a comprehensive web-based platform designed to streamline and automate the process of student enrollment and academic course management. Built using the Django framework, the system allows students to create accounts, log in securely, browse available courses, and register for classes with ease. Administrators have access to a dedicated backend dashboard where they can manage student records, create and update course offerings, and monitor enrollment activity. The frontend of the site is crafted with HTML, CSS, and Bootstrap to ensure a responsive and user-friendly interface, while the backend leverages Python and Django’s powerful ORM for efficient data processing and storage. SQLite serves as the database for managing structured data with speed and simplicity. The system also integrates Django’s built-in authentication to enforce user roles and data security. Overall, the site offers a seamless, scalable solution for managing academic operations in a digital environment.</h2>
      </ul>
    </div>
  );
}

export default Projects;
