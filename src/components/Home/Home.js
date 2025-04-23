import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mePic from "../../Assets/mePic.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="home-main-row align-items-center justify-content-center">
            <Col md={5} className="text-center">
            <img
            src={mePic}
            alt="Emili Robles"
            className="img-fluid profile-img-centered"
            />
            </Col>
            <Col md={6} className="home-header text-start">
            <h1 className="heading">
              Hello! I am <strong>Emili Robles</strong>{" "}
              <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                Designing tech for
                <strong className="main-name"> social change.</strong>
                </h1>
                <div className="typewriter-wrap">
                  <Type />
                </div>
              </Col>
            </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
