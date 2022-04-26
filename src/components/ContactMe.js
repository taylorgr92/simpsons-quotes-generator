import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const ContactMe = () => {
  return (
    <div>
      <Card className="contact-card">
        <Card.Title className="card-title mx-auto"> Taylor Franklin</Card.Title>
        <Row>
          <Col>
            <div className="hvr-grow" id="gmail">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon"
                onClick={() =>
                  (window.location.href = "mailto:taylorgfranklin@gmail.com")
                }
              />
            </div>
          </Col>{" "}
          <Col>
            <div className="hvr-grow" id="github">
              <FontAwesomeIcon
                icon={faGithub}
                className="icon"
                onClick={() => window.open("https://github.com/taylorgr92")}
              />
            </div>
          </Col>{" "}
          <Col>
            <div className="hvr-grow" id="linked-in">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/taylorgfranklin")
                }
              />
            </div>
          </Col>
        </Row>{" "}
      </Card>{" "}
    </div>
  );
};

export default ContactMe;
