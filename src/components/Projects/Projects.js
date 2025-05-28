import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ESRX from "../../Assets/Projects/ESRX.jpg";
import radarFit from "../../Assets/Projects/radarfit_logo.png";
import bordando from "../../Assets/Projects/bordandoPalavras.png";
import mapeando from "../../Assets/Projects/mapeando.png";
import wordSearch from "../../Assets/Projects/wordSearch.png";
import spaceVentura from "../../Assets/Projects/spaceVentura.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spaceVentura}
              isBlog={false}
              title="SpaceVentura"
              description="SpaceVentura is a collection of fast-paced minigames designed to challenge children. From solving clever puzzles to quickly memorizing patterns under pressure, every world offers a fresh twist on gameplay. With a focus on developing logic, memory, and problem-solving skills."
              // pStoreLink="https://play.google.com/store/apps/details?id=com.TryAppGames.Mapeando"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mapeando}
              isBlog={false}
              title="Mapeando"
              description="Mapeando is a fun and educational digital game made for children, featuring a colorful world of minigames that explore different aspects of Brazilian culture."
              pStoreLink="https://play.google.com/store/apps/details?id=com.TryAppGames.Mapeando"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={radarFit}
              isBlog={false}
              title="RadarFit"
              description="RadarFit is an app that helps you adapt to a healthier lifestyle by rewarding the player with real rewards. I greatly contributed with the maintenance of the project by fixing bugs and adding new features."
              pStoreLink="https://play.google.com/store/apps/details?id=com.RadarStudio.RadarFit"
              appStore="https://apps.apple.com/br/app/radarfit/id1479339062"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bordando}
              isBlog={false}
              title="Bordando Palavras"
              description="'Bordando Palavras' was developed through a partnership between my university and the museum 'Espaço do Conhecimento UFMG'. The game was created as part of the exhibition Sertão Mundo, which showcases the incredible work of the Brazilian writer 'Guimarães Rosa'."
              demoLink="https://rafaelgomes00.itch.io/bordando-palavras"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ESRX}
              isBlog={false}
              title="Extreme Radical Snowboarding Xtreme"
              description="I developed this game with my colleagues as part of our final university project. In this multiplayer game, your objective is to win an extremely radical snowboarding race against other players. While taking care with the obstacles that will throw your face directly into the ground!"
              ghLink="https://github.com/lucas-khaled/Extreme-Snowboarding"
              demoLink="https://lucas-khaled.itch.io/ersx"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordSearch}
              isBlog={false}
              title="WordSearch generator"
              description="A tool designed to simplify the creation of word search boards. It automatically generates a complete, and ready-to-use boards for your game, offering both pre-made templates and boards generated at runtime."
              ghLink="https://github.com/RafaelGomes00/WordSearch-Generator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
