import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import photo1 from "../../Assets/CS407.jpg";
import photo2 from "../../Assets/ncurgroup.jpeg";
import photo3 from "../../Assets/stbx.png";
import photo4 from "../../Assets/maximonivel.jpg";
import photo5 from "../../Assets/hsf.jpg";
import photo6 from "../../Assets/research.jpg";
import photo7 from "../../Assets/leadercer.jpg";
import photo8 from "../../Assets/costar.jpg";
import photo9 from "../../Assets/HackWeek.jpg";




function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>

        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a recent graduate from the University of Wisconsin-Madison! 
              <br /> Class of 2025🎓 
              <br />🔍 B.S. in Computer Science & Data Science
              <br />🧠 Minors: Leadership & Digital Studies
              <br />🧩 Pronouns: she/her/hers
              <br />🔧 Hobbies: Cycling, Volunteering, Pokemon, Gardening
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="carousel-col">

            <Carousel indicators={false} interval={3000} pause={false}>
              <Carousel.Item>
                <img className="d-block w-100" src={photo1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={photo2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={photo3} alt="Third slide" />
              </Carousel.Item>
              
              <Carousel.Item>
                <img className="d-block w-100" src={photo4} alt="Fourth slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={photo5} alt="Fifth slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={photo6} alt="Sixth slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={photo7} alt="Seventh slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={photo8} alt="Eighth slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={photo9} alt="Ninth slide" />
              </Carousel.Item>

            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ekassz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/emili-robles/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/emilirs/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
