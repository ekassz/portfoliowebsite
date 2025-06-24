import React from "react";
import { Col, Row } from "react-bootstrap";
import 'iconify-icon'; 

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="simple-icons:rstudio" width="70" height="50"></iconify-icon>    
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:react" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:javascript" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">  
        <iconify-icon icon="simple-icons:git" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:python" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:java" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="simple-icons:kotlin" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:bash" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">  
        <iconify-icon icon="logos:html-5" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:css-3" width="70" height="50"></iconify-icon>
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="logos:bootstrap" width="70" height="50"></iconify-icon>
      </Col>
    <Col xs={2} md={1} className="tech-icons">
        <iconify-icon icon="simple-icons:docker" width="70" height="50"></iconify-icon>
      </Col>
      
    </Row>
  );
}

export default Techstack;

