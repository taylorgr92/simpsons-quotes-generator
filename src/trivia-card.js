import React from "react";
import "./styles.css";
import { Card, Button, Col, Row } from "react-bootstrap";

const TriviaCard = () => {
  return (
   <Row>
     <Col>
 
         <Card className= "trivia-card">
   
          <Card.Body>
            <Card.Title className="card-title">Your question...</Card.Title>
            <Card.Text className = "card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="card-button">Go somewhere</Button>
            <Button className="other-card-button">Go somewhere</Button>
          </Card.Body>
        </Card>
       
        </Col>
        </Row>
       
        
    
  );
};
export default TriviaCard;
