import './Skills.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';  
const Skills = () => {
  return (
    <>
        <h2  className="pb-2 border-bottom text-align-left action-title coding-skills ">Coding</h2>

    <div className="coding-skills" id="Coding">
      <div className="coding-para">
        Check out my professional profile....
      </div>
      <div className="coding-links d-flex flex-column ">
            <div className="coding-link">
              <SiLeetcode className="symbol"/> <p>LeetCode: <a href="https://leetcode.com/u/n200762/" className="text-decoration-none text-white">Check out my problem solving Skills</a></p> 
            </div>
            <div className="coding-link">
              <FaLinkedin className="symbol" /> <p>Linked In: <a href="https://www.linkedin.com/in/hemalatha-pallem-495189231/" className="text-decoration-none text-white">look at my professional journey..</a></p>
            </div>
            <div className="coding-link">
              <FaGithub className="symbol"/> <p>GitHub: <a href="https://github.com/HemaPallem" className="text-decoration-none text-white">Get my projects..</a></p>
            </div>
      </div>
    </div>
    <div className="about-Achievements" >
        <div className="about-achievement">
          <h1>Fresher</h1>
          <p>LEARNER</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
      </>
  )
}

export default Skills;