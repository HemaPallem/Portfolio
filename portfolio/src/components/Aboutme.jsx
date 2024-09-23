import './Aboutme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile_img from "../assets/logo.jpg";

const Aboutme = () =>{
  return (
    <>
    <h2  className="pb-2 border-bottom text-align-left action-title about">About me</h2>
    <div id="Aboutme"className="about d-flex flex-column justify-content-center align-items-center gap-4">
    
      
      <div className="about-sections d-flex gap-4 justify-content-center align-items-center">
        <div className="about-right flex-column gap-4">
          <img src={profile_img} alt="myself" className="about-profile" />
        </div>
        <div className="about-left">
          <div className="about-para">
            <p>I am a passionate web developer with a strong foundation in front-end and back-end technologies. With experience in building responsive, user-friendly websites and applications, I am eager to leverage my skills to contribute to innovative projects.</p>
            <p>Currently, I am seeking new opportunities to leverage my skills and contribute to innovative projects in a dynamic team environment.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML5 & CSS <hr style={{width:"50%"}}/></p></div>
            <div className="about-skill"><p>Bootstrap <hr style={{width:"70%"}}/></p></div>
            <div className="about-skill"><p>Javascript<hr style={{width:"60%"}}/></p></div>
            <div className="about-skill"><p>React-js <hr style={{width:"50%"}}/></p></div>
        </div>
        </div> 
      </div>
      
    </div>
    </>
  )
}

export default Aboutme;
 