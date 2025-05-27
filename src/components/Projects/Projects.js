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
              description="-"
              // pStoreLink="https://play.google.com/store/apps/details?id=com.TryAppGames.Mapeando"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mapeando}
              isBlog={false}
              title="Mapeando"
              description="-"
              pStoreLink="https://play.google.com/store/apps/details?id=com.TryAppGames.Mapeando"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={radarFit}
              isBlog={false}
              title="RadarFit"
              description="-"
              pStoreLink="https://play.google.com/store/apps/details?id=com.RadarStudio.RadarFit"
              appStore="https://apps.apple.com/br/app/radarfit/id1479339062"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bordando}
              isBlog={false}
              title="Bordando Palavras"
              description="-"
              demoLink="https://rafaelgomes00.itch.io/bordando-palavras"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ESRX}
              isBlog={false}
              title="Extreme Radical Snowboarding Xtreme"
              description="-"
              ghLink="https://github.com/lucas-khaled/Extreme-Snowboarding"
              demoLink="https://lucas-khaled.itch.io/ersx"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordSearch}
              isBlog={false}
              title="WordSearch generator"
              description="-"
              ghLink="https://github.com/RafaelGomes00/WordSearch-Generator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
