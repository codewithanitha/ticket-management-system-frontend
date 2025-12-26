import "./About.css";

function About() {
  return (
    <div className="about">
      <h2>About This Project</h2>

      <p>
        The Ticket Management System is designed to streamline the process
        of handling customer or internal support requests. It allows users
        to raise tickets, track their status, update progress, and resolve
        issues efficiently.
      </p>

      <h3>Technologies Used</h3>
      <ul>
        <li>Frontend: React.js</li>
        <li>Backend: Spring Boot (REST APIs)</li>
        <li>Database: H2 (Development) / MySQL (Production)</li>
        <li>HTTP Client: Axios</li>
      </ul>

      <h3>Key Features</h3>
      <ul>
        <li>Create, view, update, and delete tickets</li>
        <li>Clean and responsive user interface</li>
        <li>RESTful API integration</li>
        <li>Separation of frontend and backend</li>
      </ul>

      <h3>Use Cases</h3>
      <p>
        This system can be used in IT support teams, customer service
        departments, and internal issue-tracking systems.
      </p>
    </div>
  );
}

export default About;
