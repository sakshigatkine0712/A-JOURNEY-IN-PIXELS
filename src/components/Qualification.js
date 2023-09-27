import React from "react";
import { Col, Row,Container } from "react-bootstrap";
import './Qualification.css'
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Qualification = () => {
  return (
    
  <section className="qualification" id="qualification">
<Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}id="qualification-bx">
                <h2>Qualification</h2>
                <p>In this segment, I've meticulously detailed my academic qualifications and outlined my notable internships,
                       offering a comprehensive view of my educational and professional journey.</p>
      
                 <Row className="education-row">
               <Col size={12} sm={6} md={6} style={{marginTop:'10px'}} >
               <h3 className="title">Education</h3>

               <div   id="education-box">
                              <div className="education-content">
                                <div className="content">
                                  <div className="year">
                                Feb 2021 - Sep 2023
                                  </div>
                                  <h3>B.Tech - G. H. Raisoni College Of Engineering, Nagpur</h3>
                                  <p>I hold a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering 
                                    from G.H. Raisoni College of Engineering, Nagpur, with a noteworthy CGPA of 8.46.</p> </div>
                              </div>

                              <div className="education-content">
                                <div className="content">
                                  <div className="year">
                                 Aug 2017 - Nov 2020
                                  </div>
                                  <h3>Diploma - Anjuman Polytechnic College, Nagpur </h3>
                                  <p>I have successfully completed a Diploma in Computer Science and Engineering from Anjuman Polytechnic 
                                    College, Sadar Nagpur, with a commendable aggregate score of 91.60%.</p> </div>
                              </div>

                              <div className="education-content">
                                <div className="content">
                                  <div className="year">
                                 Jan 2016 - Jun 2017
                                  </div>
                                  <h3>10th - M.P.D.S Lokanchi School, Nagpur </h3>
                                  <p>I have successfully completed my 10th-grade education from M.P.D.S Lokanchi School, 
                                     Nagpur, Maharashtra, achieving a notable 83.20% in my academic performance. </p> </div>
                              </div>


                            </div>
               </Col>
               <Col size={12} sm={6} md={6} >
               <h3 className="title">Internships</h3>
               <div  id="education-box">
                              <div className="education-content">
                                <div className="content">
                                  <div className="year">
                                   Jun 2022 - Feb 2023
                                  </div>
                                  <h3>Web Developer - Adivid Technologies Pvt Ltd. , Kota </h3>
                                  <p> Roles And Responsibilities :<br></br> ● Modiﬁcations and Maintenance of existing platforms/web portals/ dashboards developed and deployed by Adivid Technologies.
                                  <br></br> ● Development and testing of new products (modiﬁcations included)
                                  <br></br> ● Create new software tools and conduct deployment.
                                  <br></br> ● Conduct training sessions on the ﬁeld if required. 
 
 </p> </div>
                              </div>

                              <div className="education-content">
                                <div className="content">
                                  <div className="year">
                                  May 2019 - Jun 2019
                                  </div>
                                  <h3>Back-End Traine - QaswaTech Private Ltd. , Nagpur </h3>
                                  <p>I actively participated in the "Enterprise Application Services" project, which I successfully 
                                    completed. The technologies I utilized for this project included HTML5, CSS3, the Bootstrap framework, Java, and MySQL.</p> </div>
                              </div>
                              
                              


                            </div>
              </Col>
               </Row>
            
                 
              

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

                       {/*
                        <div className="education-row">
                          <div className="education-column">
                            <h3 className="title">Education</h3>
                            <div className="education-box">
                              <div className="education-content">
                                <div className="content">
                                  <div className="year">
                                   2021 - 2023
                                  </div>
                                  <h3>B.Tech - G. H. Raisoni College Of Engineering, Nagpur</h3>
                                  <p>I hold a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering 
                                    from G.H. Raisoni College of Engineering, Nagpur, with a noteworthy CGPA of 8.46.</p> </div>
                              </div>
                            </div>
                          </div>
  </div>*/}
                        <img className="background-image-left" src={colorSharp} alt="Image" />

                       </section>



                    

  )
}



 
 