import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zámbó Krisztián </span>
            from <span className="purple">Hungary.</span>
            <br />I am a student pursuing BSC in Computer Science in PE-MIK.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching movies/series
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Socializing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Control can sometimes be an illusion. 
            But sometimes you need illusion to gain control."{" "}
          </p>
          <footer className="blockquote-footer">Mr. Robot</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
