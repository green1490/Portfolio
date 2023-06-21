import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import handSign from "../../Assets/Projects/hand_sign.png"
import coinDash from "../../Assets/Projects/coinDash.png"
import sensor from "../../Assets/Projects/sensor.png"
import expense from "../../Assets/Projects/expense.jpg"
import note from "../../Assets/Projects/note.png"
import sysdev from "../../Assets/Projects/sysdev.png"

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
              before you are running out from the time. If you hit 
              any obsticle it's a game over."
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
              What you need for an android application. How layouts or fragments works. How
              permissions works. The app have 3 type of sensor that an average phones have. It has
              lux meter,can measure distance and has a step counter."
              ghLink="https://github.com/green1490/sensor"
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense tracker"
              description="The app stores a person's purchase history with the given category and expense. In addition it shows you
              statistics about the purchase histories. It was developed in Kotlin. Furthermore the application uses the
              Android API for storing and reading the data asynchronically, biometric identification and for storing the
              app's settings."
              ghLink="https://github.com/green1490/expense-tracker"
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Note"
              description="It is a markdown note taking software that can sync with a database. The UI utilize the Vue.JS framework
              which communicates with Node.JS for system calls. As for the back-end i used a BaaS solution which is
              Pocketbase."
              ghLink="https://github.com/green1490/Note-electron"
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sysdev}
              isBlog={false}
              title="Sysdev for solar panels"
              description="It covers every process a company needs to do for maintenance. For the front-end we used up the Vue.JS
              framework which helped us tremendously keeping the code base clean and making the stack more
              scalable with modularization. The two stack connects each other via HTTP connection. First the user
              needs authentication and to be authorized for executing the back-end's actions. The authorization uses
              encrypted cookies hence the user cant execute any other role's action. The back-end uses the asp.net
              framework as a web API."
              ghLink="https://github.com/Sysdev-for-solar-panels/front-end"
            />
        </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
