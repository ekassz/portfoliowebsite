import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Organizations from "./Organizations";
import Aboutcard from "./AboutCard";
import csImage from "../../Assets/csgrad.JPG";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={4}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={csImage} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Organization <strong className="purple">Involvement</strong>
        </h1>

        

      </Container>
    </Container>
  );
}

export default About;
