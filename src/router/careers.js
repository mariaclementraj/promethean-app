import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/careers.css";
import box from "../image/square box.png";
import circle from "../image/circle arrow.png"
import image1 from "../image/image1.jpg";
import image2 from "../image/image2.jpg";
import image3 from "../image/image3.jpg";
import image4 from "../image/image4.jpg";
import image5 from "../image/image5.jpg";
import image6 from "../image/image6.jpg";
import image7 from "../image/image7.jpg";

import gayahryImg from '../image/gayahry.jpg'; 
import sudarsonImg from '../image/sudarson.jpg';
import rojarImg from '../image/rojar.jpg';


const teamMembers = [
  {
    name: 'Gayahry S',
    title: 'Chief Operating Officer',
    image: gayahryImg,
    bgPattern: 'pattern-star',
  },
  {
    name: 'Sudarson S',
    title: 'Human Resources',
    image: sudarsonImg,
    bgPattern: 'pattern-circles',
  },
  {
    name: 'Rojar J',
    title: 'UX/UI Designer',
    image: rojarImg,
    bgPattern: 'pattern-diamonds',
  },
];

const images = [
  { src: image1, alt: "First slide" },
  { src: image2, alt: "Second slide" },
  { src: image3, alt: "Third slide" },
  { src: image4, alt: "Fourth slide" },
  { src: image5, alt: "Fifth slide" },
  { src: image6, alt: "Sixth slide" },
  { src: image7, alt: "Seventh slide" },
];

const Careers = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center position-relative" style={{ minHeight: "160vh" }}>
      <img src={box} alt="Top Right" className="top-right-image" />
      <Row className="mb-4 text-container">
        <Col>
          <h1 className="text-center">
            We're built for <span>software teams</span>
          </h1>
          <p className="text-center para">
            If you are a talented and ambitious individual looking to make a mark in your career, we invite you to explore our career opportunities.
          </p>
        </Col>
      </Row>
      <div className="image-slider">
        <div className="image-track">
          {images.map((img, index) => (
            <img key={index} className="image-item" src={img.src} alt={img.alt} />
          ))}
          {images.map((img, index) => (
            <img key={index + images.length} className="image-item" src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
      <div className="btn-back"><Button className="custom-btn mt-4">See Jobs <img src={circle} alt="Top Right" className="circle"/></Button></div>
      <div className="marquee-container">
        <div className="marquee-text">
          Meet Our Team <span>Meet Our Team</span> Meet Our Team <span>Meet Our Team</span> Meet Our Team
        </div>
      </div>  

      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index} md={4} className="mb-4">
            <div className={`team-member ${member.bgPattern}`}>
              <img src={member.image} alt={member.name} className="img-fluid" />
              <div className="overlay">
                <h5 className="text-white">{member.name}</h5>
                <p className="text-white1">{member.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
  
    </Container>
  );
};

export default Careers;
