import React from "react";

class QuoteBox extends React.Component {
  render() {
    return (
  
      <div>
        <div className="quote-container">
          <p className="quote-text">{this.props.quote}</p>

         
            
            <img src={this.props.image} alt="Simpsons character"/>

        

           <p class="author-name">{this.props.name}</p>
          </div> 

      </div>
 
    );
  }
}

export default QuoteBox;
