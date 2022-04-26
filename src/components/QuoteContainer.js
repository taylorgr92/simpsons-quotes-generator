import React from "react";


class QuoteContainer extends React.Component {
  render() {

    return (

 <div>
     

        <div className="quote-container">

          <p className="quote-text">{this.props.quote}</p>

            
            <img src={this.props.image} alt="Simpsons character" className= "simspson-image"/>


           <p class="author-name">{this.props.author}</p>

<div >
           <button className="quote-button" onClick={this.props.handleClick}>
            Next Quote!
          </button>
          </div>
      
    </div>
    </div>



    );
  }
}

export default QuoteContainer;
