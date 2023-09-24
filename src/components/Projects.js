import './Projects.css'
import { ProjectCard } from './ProjectCard';
import image1 from '../assets/img/pro.png';
import image2 from '../assets/img/pro3.png';
import image3 from '../assets/img/pro2.png';
import image4 from '../assets/img/pro1.png';
import { Container, Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title:'Caffeine Connection',
      description: "This website is a dummy site with no functionality added. This website is only for showcasing front-end skills. Technologies used : HTML, CSS, Javascript.",
      image:image1,
      url:'https://github.com/sakshigatkine0712',

    },
    {
      title:"Tour And Travel" ,
      description:"This website is a dummy site with no functionality added. This website is only for showcasing front-end skills. Technologies used : HTML, CSS, Javascript.",
      image: image2,
      url:'https://github.com/sakshigatkine0712',
    },

    
    {
      title:"The Weather App",
      description:"This project has been developed using React.js, creating a compact weather application for the purpose of retrieving current weather data for any city. The weather data is acquired by searching for the city name. In this project, the Open Weather API has been employed, which is a free weather API providing current weather information.",
      image:image3,
      url:'https://sakshigatkine0712.github.io/Weather-App-using-React/',
    },
    {
      title:"A Journey in Pixels: Sakshi's Portfolio" ,
      description:"This project showcases my skills, projects, and qualifications. I built this project using ReactJS, along with HTML, CSS, and JavaScript",
      image: image4,
      url:'https://github.com/sakshigatkine0712',
    },
  ]
 
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"As a recent graduate, I'm eager to introduce a collection of projects 
                  I've completed, which highlight my abilities and dedication. 
                  These projects serve as valuable additions to my personal portfolio."</p>
                  
                 
                 <Row>
                 {
                   projects.map((project, index) => {
                     return (
                       <ProjectCard
                         key={index}
                         {...project}
                         />
                     )
                   })
                 }
               </Row>
            
                 
              

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}