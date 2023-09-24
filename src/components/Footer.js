import './Footer.css'
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
        <Col size={12} sm={6} md={4} className='footer-div'>
        <div>
       <h3><img src={logo} alt="Logo" />A Journey in Pixels: Sakshi's Portfolio</h3>
      <p>This project showcases my Skills, Projects, and Qualifications.
       </p><p> Email : sakshigatkine2002@gmail.com
        </p>
       </div>  
       </Col>   
       <Col size={12} sm={6} md={4} className='footer-div text-center'>
       <div>
       <h3>NAVIGATION LINKS</h3>
      <li><a href="#home">Home</a></li>
      <li><a href="#qualification">Qualification</a></li>
       <li><a href="#skills">Skills</a></li>
       <li><a href="#projects">Projects</a></li>
       
       
</div>  
</Col> 
<Col size={12} sm={12} md={4}>
<h3>Connect With Me On</h3>    
    <div className="social-iconfooter">
            <a href='https://www.linkedin.com/in/sakshi-gatkine-7a26b5235/'><img src={navIcon1} alt='Linkedin' /></a>
              <a href='https://github.com/sakshigatkine0712'><img src={navIcon2} alt='Github' /></a>
              <a href='https://www.instagram.com/_s.a.k.s.h.i.i.i.i_/'><img src={navIcon3} alt='Instagram' /></a>
             </div>
       </Col>
       </Row>

       <div className="mt-5 text-center">
       <p>&copy; Copyright 2023 | All Rights Reserved</p>
</div>
</Container>
</footer>
  )
}


      
        
