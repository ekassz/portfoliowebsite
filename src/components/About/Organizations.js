import ProjectCard from "../Projects/ProjectCards";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import wacm from "../../Assets/Group.png"
import hsforg from "../../Assets/hsfSmall.jpg";
import ceo from "../../Assets/ceoScholar.jpg";
import atlas from "../../Assets/atlas.png";
import ls from "../../Assets/l&s.png";
import mlt from "../../Assets/mltdeloitte.jpg";
import rtc from "../../Assets/Vector.png";
import wiscience from "../../Assets/wiscience.jpg";

function Organizations() {
    return (
    <Container fluid style={{ padding: "0px", margin: "0px" }}>
        <Container>
             <Row style={{ justifyContent: "center" , paddingTop: "0px"}}>
                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={rtc}
                        isBlog={false}
                        title="Rewriting The Code (RTC)"
                        description="I’m a current member and served as a Summer Hub leader in Seattle in summer 2024 while interning- to help create a community with other women interns in Seattle!"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={wacm}
                        isBlog={false}
                        title="WACM (ACM's Women in Computing)"
                        description="Being part of the Exec board, I collaborated with my team to host biweekly lunches including guests who range from student, professors, to professionals in CS!"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={wiscience}
                        isBlog={false}
                        title="Wiscience: STEM Immersive Program"
                        description="I volunteered as a STEM peer leader where we host events and lead accountability groups in hopes to make an immersive environment for all students in STEM."
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={ls}
                        isBlog={false}
                        title="L&S Dean's Ambassador"
                        description="2024-2025 ambassador for the college of letters & science @ Uw-madison, where I help lead the development of the college’s structure for student life."
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={hsforg}
                        isBlog={false}
                        title="Hispanic Scholarship Fund (HSF)"
                        description="I’m a HSF scholar where I have been able to go to their STEM summit in San Jose, CA. They’ve helped me gain access to internship prep and learning how to give back!"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={mlt}
                        isBlog={false}
                        title="MLT: Software Engineering Career Prep"
                        description="I’m a SWE fellow for MLT, where I've had the opportunity to go to their tech trek in San Francisco, CA and their career summit in Texas @ Deloitte University."
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={atlas}
                        isBlog={false}
                        title="ATLAS Fellow"
                        description="Being an ATLAS scholar & fellow has changed my college career as I got to intern with 2 of their partner companies and receiving a scholarship to fund my studies."
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={ceo}
                        isBlog={false}
                        title="CeO Scholar @ UW-Madison"
                        description="Being a CeO scholar, I had the experience to study abroad in Costa Rica & present my labs research on AI Fairness at the NCUR conference in Pittsburgh!"
                    />
                </Col>
            </Row>
        </Container>
    </Container>

    );
}

export default Organizations;