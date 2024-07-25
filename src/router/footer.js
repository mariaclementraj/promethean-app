import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "../styles/footer.css";
import logo from "../promethean_software_solutions_logo.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="pt-5">
          <Col md={1} className="mb-3">
            <div
              style={{
                backgroundColor: "#ffc100",
                padding: "10px",
              }}
            >
              <img
                src={logo}
                alt="Promethean Software Solutions Logo"
                className="img-fluid mb-3"
                style={{ backgroundColor: "#ffc100" }}
              />
            </div>
          </Col>
          <Col md={2} className="mb-4">
            <h5>Our Location</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Blog</li>
            </ul>
          </Col>
          <Col md={2} className="mb-4">
            <h5>Customer Support</h5>
            <ul className="list-unstyled">
              <li>Shipping</li>
              <li>Returns</li>
              <li>Track Order</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </Col>
          <Col md={2} className="mb-4">
            <h5>Accessibility</h5>
            <ul className="list-unstyled">
              <li>Sustainability</li>
              <li>Affiliate Program</li>
              <li>Become a Partner</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </Col>
          <Col md={5} className="mb-4">
            <h5>For Free Consulting</h5>
            <h6>
              Join our mailing list for the latest updates and promotions.
            </h6>
            <Form>
              <Form.Group controlId="formEmail">
                <InputGroup className="input-group-custom">
                  <Form.Control
                    type="email"
                    className="custom-input"
                    placeholder="Enter your email"
                  />
                  <Button variant="warning" className="custom-button">
                    Get Enquire
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>

            <h6>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from us.
            </h6>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col md={12}>
            <hr />
          </Col>
        </Row>
        <Row className="pt-4">
          <Col className="d-flex justify-content-between align-items-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                &copy; 2023 Relume. All rights reserved.
              </li>
              <li className="list-inline-item">Privacy Policy</li>
              <li className="list-inline-item">Terms of Service</li>
              <li className="list-inline-item">Cookie Settings</li>
            </ul>
            <div>
              <a href="#" className="me-3">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="me-3">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="me-3">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="me-3">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="me-3">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
