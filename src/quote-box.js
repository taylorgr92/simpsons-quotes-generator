import React from "react";

class QuoteBox extends React.Component {
  render() {
    return (
     
        <div className="quote-box">
         
            
            <p className="quote-text">{this.props.quote}</p>

            <img src={this.props.image} alt="simpsons-character" id="simpson-image"/>

           
              <p className="author-text" >{this.props.author}</p>
           

            <button className="quote-button" onClick={this.props.handleClick}>
              Next Quote
              </button>
              </div>
            
          
        
    
     
    );
  }
}

export default QuoteBox;
