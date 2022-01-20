import React from "react";

class QuoteBox extends React.Component {
  render() {
    return (
     
        <div className="quote-box">
          <div className="quote-container">
            
            <p className="quote-text">{this.props.quote}</p>

            <img src={this.props.image} alt="simpsons-character" />

           
              <p className="author-text" >{this.props.author}</p>
           

            <button className="quote-button" onClick={this.props.handleClick}>
              Next Quote
              </button>
              </div>
           
          </div>
      
     
    );
  }
}

export default QuoteBox;
