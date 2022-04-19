import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin  } from "@fortawesome/free-brands-svg-icons";

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
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
         
          </Col>{" "}
          <Col>
            <FontAwesomeIcon icon={faGithub} className="icon" onClick={() => window.open('https://github.com/taylorgr92')} />
          
          </Col>{" "}
          <Col>
          <FontAwesomeIcon icon= {faLinkedin} className= "icon" onClick={() => window.open("https://www.linkedin.com/in/taylorgfranklin")}/>
         
          </Col>
        </Row>{" "}
      </Card>{" "}
    </div>
  );
};

export default ContactMe;
