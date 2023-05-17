import { Container, Row, Col } from "react-bootstrap";
import React from "react";

function Footer() {
  return (
    <footer className="text-center">
      <Container>
        <Row>
          <Col className="copyright" style={{ textAlign: "center", opacity:"0.6" }}>
            Copyright &copy; CryptoAI
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
