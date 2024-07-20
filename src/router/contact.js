import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/contact.css";
import logo from "../promethean_software_solutions_logo.jpeg";

const Contact = () => {
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center contact"
      style={{ minHeight: "100vh" }}
    >
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Contact Us</h1>
          <p className="text-center">
            Get in touch with us for a free consultation on your project.
          </p>
        </Col>
      </Row>
      <Row className="align-items-center gx-5">
        <Col md={6} className="text-center">
          {/* Column for images */}
          <div
            style={{
              backgroundColor: "#ffc100",
              padding: "20px",
              borderRadius: "50px",
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
        <Col md={6}>
          {/* Column for input fields */}
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label className="input-type">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label className="input-type">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="input-type">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder=""
                    className="input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label className="input-type">Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3" controlId="formTopic">
                  <Form.Label className="input-type">Choose a topic</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Select one..."
                    className="input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label className="input-type">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Type your message..."
                    className="input-textarea"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 center-checkbox input-type"
                  controlId="formCheckbox"
                >
                  <Form.Check
                    type="checkbox"
                    label="I accept the terms"
                    id="termsAndConditions"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12} className="text-center">
                <Form.Group className="mb-3" controlId="formMessage">
                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "#ebebeb",
                      color: "#222222",
                      padding: "15px 30px",
                      fontSize: "16px",
                      borderRadius: "39px",
                    }}
                  >
                    Get Started
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
