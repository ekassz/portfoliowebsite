import ProjectCard from "../Projects/ProjectCards";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import rtc from "../../Assets/Vector.png";
import tpp from "../../Assets/TPPScholars.jpg";

function Organizations() {
    return (
    <Container fluid style={{ padding: "0px", margin: "0px" }}>
        <Container>
             <Row style={{ justifyContent: "center" , paddingTop: "0px"}}>
                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={tpp}
                        isBlog={false}
                        title="Tech Public Policy @ Georgetown University"
                        description="I'm a TPP scholar where I get a $35K scholarship from the McCourt School of Public Policy at Georgetown! As well as getting partned with the BGL research lab to work on policy issues."
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={rtc}
                        isBlog={false}
                        title="Rewriting The Code (RTC)"
                        description="I’m a current member and served as a Summer Hub leader in Seattle in the summer of 2024 while interning- to help create a community with other women interns in Seattle!"
                    />
                </Col>
            </Row>
        </Container>
    </Container>

    );
}

export default Organizations;