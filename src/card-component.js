import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

class QuoteCard extends React.Component {
  render() {
    return (
  <div>
        <Row>
          <Col>
            <Card className="quote-card">
              <Card.Body>
                <Card.Text>{this.props.quote}</Card.Text>
                <Card.Text>{this.props.author}</Card.Text>
                <Button className="card-button"
                  onClick={this.props.handleClick}>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </div>
      
    );
  }
}

export default QuoteCard;
