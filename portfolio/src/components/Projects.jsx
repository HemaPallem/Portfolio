import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import profile_img from "../assets/logo.jpg";
import portfolio from "../assets/portfolio.png";
import weather from "../assets/weather-app-img.png";
import myntra from "../assets/myntra-clone.png";


const Projects = () => {
  const projects = [
    {
      p_no:1,
      p_name:"Weather App",
      languages_used:"Html, CSS, Javascript",
      description:"A simple weather which gives the temperature humidity and wind speed",
      github:""
    },
    {
      p_no:2,
      p_name:"Port Folio",
      languages_used:"React-js, Bootstrap",
      description:"A basic information of a person" ,
      github:""  
    },
    {
      p_no:3,
      p_name:"Mintra Clone",
      languages_used:"HTML, CSS",
      description:"Replica of a Myntra website.",
      github:""
    }
  ]
  const projectImages = [weather, portfolio, myntra]
  return (
    <>
    <div className="project-title" >
        <h2  className="pb-2 border-bottom text-align-left action-title about">My Projects</h2>
      </div>
    <div className= "Projects" id ="Projects">
      <div className="project-container">
        {projects.map((project, index)=>{
          return <div key={index} className="project-format">
            <h3 >{project.p_no}</h3>
            <h2>{project.p_name}</h2>
            <p><b>Languages Used:</b>{project.languages_used}</p>
            <p><b>Description:</b>{project.description}</p>
          </div>
        })}
      </div>
      <div className="project-container">
        {projectImages.map((img, index)=>{
          return <div key={index} className="project-format">
            <img src={img} alt="" className="project-img"/>
          </div>
        })}
      </div>

    </div>
    
    </>
  )
}

export default Projects;
