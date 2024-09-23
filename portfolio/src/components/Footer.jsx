import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';  

const Footer = () => {
  return (
    <>
    
    <div className="footer-container">
    <hr />
    <div className="footer d-flex align-items-center justify-content-center">
      <p>copy right &copy; <span>pallemHemalatha </span>#n200762@rguktn.ac.in</p>
    </div>
    <div className="footer-details d-flex  justify-content-center align-items-center">
            <div className="footer-detail">
              <SiLeetcode/> <p><a href="https://leetcode.com/u/n200762/" className="text-decoration-none text-white">LeetCode</a></p>
            </div>
            <div className="footer-detail">
              <FaGithub/> <p><a href="" className="text-decoration-none text-white">GitHub</a></p> 
            </div>
            <div className="footer-detail">
              <FaLinkedin/> <p><a href="https://www.linkedin.com/in/hemalatha-pallem-495189231/" className="text-decoration-none text-white">Linked In</a></p>
            </div>
            
      </div>
    </div>
    </>
  )
}

export default Footer;