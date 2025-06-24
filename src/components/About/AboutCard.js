
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
            I am currently employed as a <span className="purple">Software Engineer</span> at <span className="purple"> Starbucks.</span>
            <br />
            <br />
            I am a passionate advocate for equity, representation, and social change through technology,
            driven by my experiences as a first-generation Latina in STEM. I strive to leverage data visualization, computing and 
            UX design to be an advocate for underrepresented communities.
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
