import "./Hero.css";

import "bootstrap/dist/css/bootstrap.min.css";

import profile_img from "../assets/logo.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <>
      <div
        id="Home"
        className="main d-flex flex-column align-items-center justify-items-center gap-2"
      >
        <img src={profile_img} alt="myself" className="profile-img" />
        <h1>
          <span>I'm Hemalatha</span>, Web Developer
        </h1>
        <p>MERN stack Developer | JAVA CORE | DSA </p>
        <div className="main-action d-flex">
          <div className="hero-connect">
            <AnchorLink
              offset={50}
              href="#Contact"
              className="text-decoration-none text-white"
            >
              Connect with me
            </AnchorLink>
          </div>
          <div className="resume-download ms-3">
            <a
              href={resume}
              className="text-decoration-none text-white"
              target="_blank"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
