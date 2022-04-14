import React from "react";

class QuoteBox extends React.Component {
  render() {
    return (
  
      <div>
        <div className="quote-container">
          <p className="quote-text">{this.props.quote}</p>

         
            
            <img src={this.props.image} alt="Simpsons character" className= "simspson-image"/>

        

           <p class="author-name" style={{color:"white"}}>{this.props.author}</p>
          </div> 

      </div>
 
    );
  }
}

export default QuoteBox;
