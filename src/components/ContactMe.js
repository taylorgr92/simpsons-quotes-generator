import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <div>
      <Card className="contact-card">
        <Card.Title className="mx-auto"> Taylor Franklin </Card.Title>{" "}
        <Row>
          <Col>
            <Container className="my-phone">
              <FontAwesomeIcon icon={faPhone} />
            </Container>
          </Col>{" "}
          <Col>
            <Container className="my-email">
              <FontAwesomeIcon icon={faEnvelope} />
            </Container>
          </Col>{" "}
          <Col>
            <Container className="my-git">
              <FontAwesomeIcon icon={faGithub} />
            </Container>{" "}
          </Col>{" "}
        </Row>{" "}
      </Card>{" "}
    </div>
  );
};

export default ContactMe;
