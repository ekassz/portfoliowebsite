import React from "react";
import { Col, Row } from "react-bootstrap";
import 'iconify-icon'; 

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="simple-icons:visualstudiocode" width="70" height="50"></iconify-icon>    
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:gitlab" width="70" height="50"></iconify-icon>  
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:github" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">  
        <iconify-icon icon="simple-icons:postman" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:linux-tux" width="70" height="50"></iconify-icon> 
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="simple-icons:androidstudio" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:firebase" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="simple-icons:unity" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:jupyter" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">  
        <iconify-icon icon="logos:vim" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="simple-icons:miro" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:figma" width="70" height="50"></iconify-icon>
      </Col>

    </Row>
  );
}

export default Toolstack;
