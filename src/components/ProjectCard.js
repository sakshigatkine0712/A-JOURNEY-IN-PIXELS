import './Projects.css'
import { Col, Card } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const ProjectCard = ({ title, description,image,url }) => {
  return (
    <Col size={12} sm={6} md={6} style={{marginTop:'10px'}}>
    <TrackVisibility>
              {({ isVisible }) => 
     <Card className={isVisible ? "animate__animated animate__zoomIn" : "" } id='cardstyle'>
      <Card.Img variant="top" className='cardimage' src={image} />
      <Card.Body className='cardbody'>
        <Card.Title className='title'>{title}</Card.Title>
        <Card.Text className='description' >{description}</Card.Text>
        <button className='vvd' onClick={()=> window.location.assign(url) }>
            Click Here
        </button>
      </Card.Body>
    </Card>
}
</TrackVisibility>
  </Col>
  )
}