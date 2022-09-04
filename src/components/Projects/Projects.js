import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import handSign from "../../Assets/Projects/hand_sign.png"
import coinDash from "../../Assets/Projects/coinDash.png"
import sensor from "../../Assets/Projects/sensor.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My portfolio"
              description="In this project i learned about
              front-end. I choosed vue.js for it's better learning curve and
              I also used anime.js for a more fluid ui experince. It was a great experience for me to
              learn about client side routing,ui scalability and how to build a website in a modern approach."
              ghLink="https://github.com/green1490/green1490.github.io"
            />
        </Col> */}

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coinDash}
              isBlog={false}
              title="Coin Dash"
              description="I always had a bit of interest 
              for making video games. The inner cogs of a game.
              So i tried to make a little game. For this i choosed
              Godot. I loved how GDScript was a python like language. 
              The game is a tile based game. You pick up all the coins
              before you are running out from the time.If you hit 
              any obsticle it's an game over."
              ghLink="https://github.com/green1490/Coin-Dash"
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handSign}
              isBlog={false}
              title="Daveran project"
              description="This was a group project with a few of my classmates. 
              My part was in this project to develop the UI. First 
              we tried to make it with flutter for cross platform support. 
              However we had a problem with a package for IOS support so we decided to only support
              android natively. You can use this app to translate a hand sign."
              ghLink="https://github.com/The-BIg-Three-Tree/daveran-android"
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sensor}
              isBlog={false}
              title="Sensor"
              description="It was a great project to learn the basic of android development. 
              What you need for an android applaction. How layouts or fragments works. How
              permissions works. The app have 3 type of sensor that an average phones have. It have
              lux meter,can measure distance and has a step counter."
              ghLink="https://github.com/green1490/sensor"
            />
        </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
