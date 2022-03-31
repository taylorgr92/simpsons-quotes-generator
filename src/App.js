import QuoteBox from "./quote-box";
import React from "react";
import "./styles.css";
import myFooter from ".myFooter"
import 'bootstrap/dist/css/bootstrap.min.css';

import quotes from "./quoteArr";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
      image: quotes[0].image,
    };
  }

  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }
  shuffleQuotes(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }
  handleClick = () => {
    const generateQuote = this.randomQuote();
    this.setState({
      quote: generateQuote.quote,
      author: generateQuote.author,
      image: generateQuote.image,
    });
    this.shuffleQuotes(quotes);
  };

  render() {
    return (
      <React.Fragment>
        
        <h1 className="page-title">Simpsons Quote Generator!</h1>
   
        <QuoteBox handleClick={this.handleClick} {...this.state} />
        <myFooter/>
      </React.Fragment>
      
    );
  }
}

export default App;
