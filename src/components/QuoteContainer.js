import React from "react";
import { CSSTransition } from 'react-transition-group';


class QuoteContainer extends React.Component {
  render() {

    return (

 <div>
     

        <div className="quote-container">

          <p className="quote-text">{this.props.quote}</p>

            
            <img src={this.props.image} alt="Simpsons character" className= "simspson-image"/>


           <p class="author-name" style={{color:"white"}}>{this.props.author}</p>


           <button className="quote-button" onClick={this.props.handleClick}>
            Next Quote!
          </button>
          </div> 

      </div>

    );
  }
}

export default QuoteContainer;
