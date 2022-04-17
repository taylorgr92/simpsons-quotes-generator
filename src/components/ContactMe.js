import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";
import {faPhone} from '@fortawesome/free-solid-svg-icons'

const ContactMe = () => {
  return (
    <div>
      <Card className="contact-card">
        <Card.Title className="mx-auto"> Taylor Franklin </Card.Title>{" "}
        <Row>
          <Col><FontAwesomeIcon icon={faPhone}/> </Col> <Col>2 </Col> <Col>3 </Col>{" "}
        </Row>{" "}
      </Card>{" "}
    </div>
  );
};

export default ContactMe;
