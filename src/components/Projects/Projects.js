import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import life_hispanic_countries from "../../Assets/Projects/lifeExpectancy.png";
import mlClassifier from "../../Assets/Projects/mlFrequency.png";
import pieceitpc from "../../Assets/Projects/pieceitpclogo.png";
import testrail from "../../Assets/Projects/testraillogo.png";
import berryblade from "../../Assets/Projects/berrybladelogo.png";
import esgDist from "../../Assets/Projects/esgDistribution.png";
import pcbuild1 from "../../Assets/Projects/pcbuild1.jpg";
import pcbuild2 from "../../Assets/Projects/pcbuild2.jpg";
import ventraApp from "../../Assets/Projects/ventraApp.png";
import iceSafety from "../../Assets/Projects/iceSafety.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h2 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h2>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <h2 className="project-heading"> <strong className="purple">Data Science</strong> Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mlClassifier}
              isBlog={false}
              title="AI Fairness ML Classifier: MadCollab Lab"
              description="Co-developed & evaluated LR, TF-IDF + SVM classifiers to detect user concerns. Used trained models to classify uncoded responses at scale and show frequent concerns, contributing to a report interface that helps developers interpret contextual fairness risks. "
              ghLink="https://github.com/madcollab-jrg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={esgDist}
              isBlog={false}
              title="ESG Performance Analysis Tool: Shiny app"
              description="Created a database in a group of 5 for hypothetical ESG investors from diverse backgrounds, specifically those interested in clean energy companies. used rstudio and kaggle to build models for analysis’."
              ghLink="https://github.com/ekassz/ESGProject"
              demoLink="https://ekass.shinyapps.io/ESGApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={life_hispanic_countries}
              isBlog={false}
              title="Life Expectancy: Hispanic Countries Analysis"
              description="Life Expectancy in Hispanic Countries Dashboard, by gender, population, and years 2012 - 2021. Developed through rstudio, with an analysis paper explaining findings."
              ghLink="https://github.com/ekassz/globalhealth_development"
              demoLink="https://ekass.shinyapps.io/life_hispanic_countries/"              
            />
          </Col>

          <h2 className="project-heading"> <strong className="purple">Software Engineering</strong> Projects</h2>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={berryblade}
              isBlog={false}
              title="Berry blade: unity VR game"
              description="Developed a VR game called Berry Blade, where we introduce the idea of being in a zero-gravity environment with the main goal of cutting fruit and avoiding explosions/obstacles. We worked in unity using c#, shaderlab, mathematica, and hlsl."
              ghLink="https://github.com/ShaShuShi/Berry_Blade"
              demoLink="https://drive.google.com/file/d/1TF0Sue90IMXRoxsSUqqvbA-K8zYHZUo1/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pieceitpc}
              isBlog={false}
              title="Piece it PC: Android App"
              description="A guide to learn how to build a pc whether you’re a beginner or expert! Used kotlin programming. I was in charge of the firebase integration as well as leading design and front-end development."
              ghLink="https://github.com/ekassz/PieceItPC"
              demoLink="https://drive.google.com/file/d/1OPIzTlmE4ZtBWNOyZ64BatqqD4PW931W/view" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={testrail}
              isBlog={false}
              title="Test Case Automation Tool: Test Rail"
              description="I worked with kotlin, postman, and the starbucks android mobile codebase to implement an automation tool to check test cases in test rail for quality engineers."
              demoLink="https://drive.google.com/file/d/1YbILVpz5NGgpzPRSIDV9NTcj_6AwlbKc/view"
              />
          </Col>

          <h2 className="project-heading"> <strong className="purple">Hardware</strong> Projects</h2>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pcbuild1}
              isBlog={false}
              title="RGB Build: My First PC"
              description="Learned how to build my very first pc! I spent around $1.2k including 2 MSI monitors to match resolution and response rate of AMD 7. Feel free to check out my parts!"
              demoLink="https://pcpartpicker.com/user/ekasz/saved/R4mTmG"
              
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pcbuild2}
              isBlog={false}
              title="Second PC Build: Advisor Status"
              description="Helped build a pc to someone who was also new to the process (Fun Fact: This is how I got the idea of building the PieceItPC app!) budget was $1k, feel free to check out the parts!"
              demoLink="https://pcpartpicker.com/list/n8xKfy"
              />
          </Col>

          <h2 className="project-heading"> <strong className="purple">UI/UX</strong> Projects</h2>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ventraApp}
              isBlog={false}
              title="Ventra Redesign: CodePath x AmazonNext Challenge"
              description="We aimed to propose design improvements and an easy navigation process for the Ventra app, making it more accessible and user-friendly for everyday commuters with vision impairments."
              demoLink="https://docs.google.com/presentation/d/1I4tbtTettWE3BQgVXwFHvT8XXwq5GTADm7FrOnwpaJY/edit?usp=sharing"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iceSafety}
              isBlog={false}
              title="Service Learning on Ice Safety Redesign"
              description="Redesigned both the graphic and graphic chart for weather.gov to make it more accessible and user-friendly for everyday users. We also created a presentation to explain our design choices."
              demoLink="https://docs.google.com/presentation/d/1tknDvG7vITEbgGV-l7X_Qj_UlH5oxdBsQrAC_fjeu_Q/edit?usp=sharing"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
