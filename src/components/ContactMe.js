import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <div>
      <Card className="contact-card">
        <Card.Title className="card-title mx-auto">
          {" "}
          Taylor Franklin{" "}
        </Card.Title>{" "}
        <Row>
          <Col>
            <FontAwesomeIcon icon={faPhone} className="phone" />
            <span className="icon-info"> 922 - 381 - 7505 </span>{" "}
          </Col>{" "}
          <Col>
            <FontAwesomeIcon icon={faEnvelope} className="email" />
            <span className="icon-info"> taylorgfranklin @gmail.com </span>{" "}
          </Col>{" "}
          <Col>
            <FontAwesomeIcon icon={faGithub} className="git" />
            <span className="icon-info"> taylorgr92 </span>{" "}
          </Col>{" "}
        </Row>{" "}
      </Card>{" "}
    </div>
  );
};

export default ContactMe;
