import React from "react";

class QuoteBox extends React.Component {
  render() {
    return (
  
      <div>
        <div className="quote-container">
          <p className="quote-text">{this.props.quote}</p>

         
            
            <p className="quote-text">{this.props.quote}</p>

        
       
          <div className="author-section">
            <p className="author-text">{this.props.author}</p>
          </div>

           
              <p className="author-text" >{this.props.author}</p>
          </div> 

      </div>
 
    );
  }
}

export default QuoteBox;
