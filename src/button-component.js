import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";



class QuoteButton extends React.Component {
  render() {
    return (
      <Button
        classname="card-button"
        handleClick={this.handleClick}
        {...this.state}
      />
    );
  }
}

export default QuoteButton;