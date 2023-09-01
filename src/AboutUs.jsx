import React from "react";
import Bear from "./img/mastar-bear.jpeg";
import Cat from "./img/staff-cat.jpeg";
import "./AboutUs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <h1>About us</h1>
      <Container>
        <Row>
          <Col xs lg="2">
            <img
              alt="mastar-bear"
              src={Bear}
              width={200}
              className="master-bear"
            />
          </Col>
          <Col xs lg="8" md={{ span: 4, offset: 1 }}>
            <p className="master-comment">
              Hello!
              <br />
              I’m Bearista, who is a master of the Rabbit Hole Café! Our café is
              based on a home café bar. So when you visit here, let’s enjoy our
              café and chatting with us!
              <br />
              Also, we have two rabbits (Kinako & Sesame). If you want to play
              with them, feel free to ask me!
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs lg="8" md={{ span: 4, offset: 1 }}>
            <p className="staff-comment">
              <br />
              I'm waiting for your visit!
            </p>
          </Col>
          <Col xs lg="2">
            <img alt="staff-cat" src={Cat} width={100} className="staff-cat" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
