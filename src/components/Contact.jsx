import React from 'react';
import './Contact.css'; // Importing the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me via:</p>
      <ul className="contact-list">
        <li><strong>Phone:</strong> +1 318 394 7733</li>
        <li><strong>Email:</strong> sibandavensen@gmail.com</li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vensen-sibanda-b2997b2a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bcpq9CDTlRsm0ODE0vJKrlw%3D%3D" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/vensen-sibanda-b2997b2a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bcpq9CDTlRsm0ODE0vJKrlw%3D%3D</a></li>
        <li><strong>Github:</strong> <a href="https://github.com/Ven-Sib" target="_blank" rel="noopener noreferrer">https://github.com/Ven-Sib</a></li>
      </ul>
    </div>
  );
};

export default Contact;
