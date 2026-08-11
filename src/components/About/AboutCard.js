
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Emili Robles </span>
            from <span className="purple"> Chicago, IL.</span>
            <br />
            <br />
            I am a passionate advocate for equity, representation, and social change through technology,
            driven by my experiences as a first-generation Latina in STEM. I strive to leverage data visualization, computing and 
            UX design to be an advocate for underrepresented communities.
            <br />
            <br />
            I recently concluded my time at Starbucks Technology, where I worked on their backend systems to maintain order fulfillment and delivery. 
            I got to work on a variety of projects, including helping test and release a customer loyalty tier system to allow customers to earn rewards and perks for their purchases. I mainly focused on fixing bugs and improve the every day use of tools meant to help baristas prepare drinks more efficiently.
            <br />
            <br />
            I am now a student in the MS DSPP program at Georgetown University, where I am learning how to use data science to inform public policy and social change. I am also a Tech Policy Fellow, where I currently work as a research assistant for the Better Government Lab.
            <br />
            <br />
            In my free time, I love to do volunteer work, play pokemon, and explore new places. I'm always eager to involve myself in projects that align with my values and interests!
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be the change for your community"{" "}
          </p>
          <footer className="blockquote-footer">Emili</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
