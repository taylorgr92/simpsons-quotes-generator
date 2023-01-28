import React from "react";

const QuoteContainer = (props) => {
  return (
    <div>
      <div className="quote-container">
        <p className="quote-text">{props.quote}</p>

        <img
          src={props.image}
          alt="Simpsons character"
          className="simspson-image"
        />

        <p class="author-name" style={{ color: "white" }}>
          {props.author}
        </p>
        <button className="quote-button" onClick={props.handleClick}>
          Next Quote!
        </button>
      </div>
    </div>
  );
};

export default QuoteContainer;
