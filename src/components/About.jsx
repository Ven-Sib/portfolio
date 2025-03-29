import React from "react";
import "./Contact.css";

function About() {
  return (
    <div className="about-container">
      <img 
        src="/images/venny.jpg" 
        alt="Vensen Sibanda" 
        className="about-image"
      />
      <div className="about-text">
        <h2 className="text-3xl font-bold">About Me</h2>
        <li><strong>Resume:</strong> <a href="https://docs.google.com/document/d/17M36NOBMNoptXdy_8jXQ0BmORKKxlefi/edit?usp=sharing&ouid=104141331939696056388&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">click here</a></li>
        <p className="mt-4 text-gray-600">
          My name is Vensen Sibanda, and I am a Computer Science student at Grambling State 
          University in the United States. I am originally from Zimbabwe, and I arrived in the U.S. after 
          winning an academic scholarship. This opportunity to study abroad is the culmination of years of 
          hard work and perseverance, and it represents the chance to fulfill my dreams of becoming a 
          software engineer and contributing to advancements in technology.  
          <br /><br />
          I am deeply passionate about the intersection of science, technology, and social impact, and my journey so far has 
          shaped the person I am today—both as a student and as a leader. Growing up in Zimbabwe, I was always fascinated by how technology 
          could transform lives. I saw firsthand how access to the right tools and information could change the trajectory of 
          individuals and entire communities.  
          <br /><br />
          This curiosity led me to pursue a degree in Computer Science, as I knew that technology held the key to addressing some of the world’s most pressing 
          issues. In particular, I am motivated by the potential of Artificial Intelligence (AI) to revolutionize 
          industries, from agriculture to healthcare, and I hope to contribute to developing localized, 
          data-driven solutions for global challenges.  
          <br /><br />
          At Grambling State University, my academic focus has been on software development, where 
          I’ve had the privilege of working on several projects in fullstack development, game simulation and AI driven models. 
          <br /><br />
          In these projects, I have been fortunate to take 
          on an active leadership role, collaborating with my colleagues to bring our ideas to fruition. These 
          experiences have not only honed my technical skills in Python, JavaScript, Django, and React 
          but have also nurtured my leadership and teamwork abilities.  
          <br /><br />
          In addition to my academic pursuits, I am passionate about giving back to my community. 
          Currently, I am helping gifted young students from Africa prepare for the SATs and assisting 
          them with scholarship applications. The joy of seeing them succeed and realizing their potential 
          is incredibly rewarding.  
          <br /><br />
          I also plan to start a podcast to share my experiences as an 
          international student in the U.S. and to inspire others who wish to study abroad. By discussing 
          the challenges I’ve faced and the lessons I’ve learned, I hope to provide guidance, 
          encouragement, and motivation to fellow international students.  
          <br /><br />
          Beyond academics, I find joy in chess, choral music, and playing the piano. These activities 
          allow me to express creativity, develop strategic thinking, and engage with a diverse group of 
          people. As a member of the Grambling State University Chess Club and Choir, I’m able to 
          balance my academic focus with creative expression, which I believe contributes to my growth 
          as both a scholar and an individual.  
          <br /><br />
          Leadership is an integral part of my journey. I am currently serving as the Secretary for the 
          African Student Association at Grambling State University, where I help cater to the needs of 
          international students and ensure their inclusion in campus activities.  
          <br /><br />
          This role has taught me 
          the importance of advocacy, communication, and teamwork, and it has strengthened my resolve 
          to contribute to a more inclusive and supportive academic environment.  
          <br /><br />
          Looking toward the future, my immediate goal is to become a software engineer and work for a 
          leading technology companies, where I can further refine my skills and contribute to 
          innovative projects.  
          <br /><br />
          In summary, my journey from Zimbabwe to the U.S. has been shaped by a passion for 
          technology, leadership, and community service. Through my studies, extracurricular activities, 
          and leadership roles, I have cultivated a strong foundation in both technical skills and social 
          responsibility. I am eager to continue learning, growing, and contributing to the field of 
          technology.
        </p>

     
      
      </div>
    </div>
  );
}

export default About;
