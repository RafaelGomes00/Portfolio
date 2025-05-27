import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I always loved the video game industry, and since I was a kid, I dreamed about creating my own games.
              <br />
              <br />I have worked on various interactive and educational games using
              <i> <b className="purple"> Unity</b> </i> and <i> <b className="purple"> Godot </b> </i>
              while creating <b className="purple">Tools</b> to improve the game development process.
            <br />
            <br />

            I'm used to develop 2D and 3D games for both Desktop and Mobile devices.
          </p>
        </Col>
        <Col md={4} className="myAvtar">
          {/* <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Tilt> */}
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/RafaelGomes00"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rafael-gomes-pinheiro/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </Container >
  );
}
export default Home2;
