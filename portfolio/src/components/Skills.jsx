// import './Skills.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { SiLeetcode } from 'react-icons/si';
// const Skills = () => {
//   return (
//     <>
//         <h2  className="pb-2 border-bottom text-align-left action-title coding-skills ">Coding</h2>

//     <div className="coding-skills" id="Coding">
//       <div className="coding-para">
//         Check out my professional profile....
//       </div>
//       <div className="coding-links d-flex flex-column ">
//             <div className="coding-link">
//               <SiLeetcode className="symbol"/> <p>LeetCode: <a href="https://leetcode.com/u/n200762/" className="text-decoration-none text-white">Check out my problem solving Skills</a></p>
//             </div>
//             <div className="coding-link">
//               <FaLinkedin className="symbol" /> <p>Linked In: <a href="https://www.linkedin.com/in/hemalatha-pallem-495189231/" className="text-decoration-none text-white">look at my professional journey..</a></p>
//             </div>
//             <div className="coding-link">
//               <FaGithub className="symbol"/> <p>GitHub: <a href="https://github.com/HemaPallem" className="text-decoration-none text-white">Get my projects..</a></p>
//             </div>
//       </div>
//     </div>
//     <div className="about-Achievements" >
//         <div className="about-achievement">
//           <h1>Fresher</h1>
//           <p>LEARNER</p>
//         </div>
//         <hr />
//         <div className="about-achievement">
//           <h1>10+</h1>
//           <p>PROJECTS COMPLETED</p>
//         </div>
//         <hr />
//         <div className="about-achievement">
//           <h1>10+</h1>
//           <p>PROJECTS COMPLETED</p>
//         </div>
//       </div>
//       </>
//   )
// }

// export default Skills;

import "./Skills.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <h2 className="pb-2 border-bottom text-align-left action-title coding-skills ">
        🚀 Coding & Tech Stack
      </h2>
      <div className="container my-5">
        {/* Coding Profiles Section */}
        <div className="row mb-5">
          <div className="col-md-4 mb-3">
            <div className="card bg-dark text-white h-100 shadow">
              <div className="card-body d-flex align-items-center">
                <SiLeetcode size={40} className="me-3 text-warning" />
                <div>
                  <h5 className="card-title">LeetCode</h5>
                  <a
                    href="https://leetcode.com/u/n200762/"
                    className="text-decoration-none text-info"
                  >
                    Check out my problem-solving journey
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card bg-dark text-white h-100 shadow">
              <div className="card-body d-flex align-items-center">
                <FaLinkedin size={40} className="me-3 text-primary" />
                <div>
                  <h5 className="card-title">LinkedIn</h5>
                  <a
                    href="https://www.linkedin.com/in/hemalatha-pallem-495189231/"
                    className="text-decoration-none text-info"
                  >
                    Explore my professional profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card bg-dark text-white h-100 shadow">
              <div className="card-body d-flex align-items-center">
                <FaGithub size={40} className="me-3 text-light" />
                <div>
                  <h5 className="card-title">GitHub</h5>
                  <a
                    href="https://github.com/HemaPallem"
                    className="text-decoration-none text-info"
                  >
                    View my projects & source code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="about-achievements text-center">
          <h4 className="mb-3">🏆 Achievements</h4>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow">
                <h1 className="text-primary">Fresher</h1>
                <p className="text-black">Always Curious & Learning</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow">
                <h1 className="text-success">10+</h1>
                <p className="text-black">Projects Completed</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow">
                <h1 className="text-danger">5+</h1>
                <p className="text-black">Major MERN Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
