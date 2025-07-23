import "./Aboutme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profile_img from "../assets/logo.jpg";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { FaLayerGroup } from "react-icons/fa6";

const Aboutme = () => {
  return (
    <>
      <h2 className="pb-2 border-bottom text-align-left action-title about">
        About me
      </h2>
      <div
        id="Aboutme"
        className="about d-flex flex-column justify-content-center align-items-center gap-4"
      >
        <div className="about-sections d-flex gap-4 justify-content-center align-items-center">
          <div className="about-right flex-column gap-4">
            <img src={profile_img} alt="myself" className="about-profile" />
          </div>
          <div className="about-left">
            <div className="about-para">
              <p>
                I’m a full-stack developer with hands-on experience in building
                responsive, real-world web applications using the MERN stack. My
                passion lies in solving complex problems through clean and
                scalable code.
              </p>
              <p>
                I’ve worked on full-featured projects like a Learning Management
                System and a social media platform using modern tools such as
                JWT authentication, Redux, Tailwind CSS, and TypeScript. I
                thrive in team environments and love contributing to impactful
                solutions.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <SiMongodb size={28} color="#4DB33D" />
              </div>
              <div className="about-skill">
                <SiExpress size={28} color="#4DB33D" />
              </div>
              <div className="about-skill">
                <SiReact size={28} color="#4DB33D" />
              </div>
              <div className="about-skill">
                <SiNodedotjs size={28} color="#4DB33D" />
              </div>
              <div className="about-skill">
                <SiTailwindcss size={28} color="#4DB33D" />
              </div>
              <div className="about-skill">
                <SiBootstrap size={28} color="#4DB33D" />
              </div>
              <div className="about-skill">
                <FaLayerGroup size={28} color="#4DB33D" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
