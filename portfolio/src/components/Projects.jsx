import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import memories from "../assets/memories.jpg";
import lms from "../assets/lms.jpg";

const Projects = () => {
  const projects = [
    {
      p_no: 1,
      p_name: "Learning Management System (LMS)",
      languages_used:
        "MERN Stack (MongoDB, Express.js, React.js, Node.js), TypeScript, Tailwind CSS, ShadCN, JWT, Google OAuth",
      description:
        "A full-featured LMS platform with role-based access for instructors and students. Includes secure JWT and Google authentication, course and lesson management, video uploads with preview, dynamic forms using React Hook Form and Yup, and a responsive UI with Tailwind and ShadCN. Backend follows RESTful API structure with TypeScript.",
      projectLink: " https://lms-frontend-53q1.onrender.com",
      image: lms,
    },
    {
      p_no: 2,
      p_name: "Memories App",
      languages_used:
        "MERN Stack (MongoDB, Express.js, React.js, Node.js), Redux, Material UI",
      description:
        "A social media app to post and manage personal memories with image uploads. Supports create, read, update, and delete (CRUD) operations, user authentication with JWT, and global state management using Redux.",
      projectLink: "https://memories-frontend-pkfw.onrender.com",
      image: memories,
    },
  ];

  return (
    <>
      <h2 className="pb-2 border-bottom text-align-left action-title about">
Projects      </h2>
      <div className="Projects" id="Projects">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-row ${index % 2 === 0 ? "row" : "row-reverse"}`}
          >
            <div className="project-content">
              <h3>{project.p_no}</h3>
              <h2>{project.p_name}</h2>
              <p>
                <b>Languages Used:</b> {project.languages_used}
              </p>
              <p>
                <b>Description:</b> {project.description}
              </p>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 View demo
              </a>
            </div>
            <div className="project-image">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.p_name}
                  className="project-img"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
