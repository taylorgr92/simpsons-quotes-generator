import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const ContactMe = () => {
  return (
    <div>
      <Card className="contact-card">
        <Card.Title className="mx-auto"> Taylor Franklin </Card.Title>{" "}
        <Row>
          <Col>1 </Col> <Col>2 </Col> <Col>3 </Col>{" "}
        </Row>{" "}
      </Card>{" "}
    </div>
  );
};

export default ContactMe;
