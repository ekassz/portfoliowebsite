import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function SocialLinks() {
  return (
    <Row className="justify-content-center text-center mt-4">
      <Col md={12}>
        <h3>
          Feel free to <span style={{ color: "purple" }}>connect</span> with me!
        </h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", fontSize: "2rem", marginTop: "20px" }}>
          <a href="https://github.com/ekassz" target="_blank" rel="noreferrer" style={{ color: "#0c0e86" }}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/emili-robles/" target="_blank" rel="noreferrer" style={{ color: "#0c0e86" }}>
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/emilirs" target="_blank" rel="noreferrer" style={{ color: "#0c0e86" }}>
            <AiFillInstagram />
          </a>
        </div>
      </Col>
    </Row>
  );
}

export default SocialLinks;
