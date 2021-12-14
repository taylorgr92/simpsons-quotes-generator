
import QuoteBox from "./quote-box";
import React from "react";
import "./styles.css"

import quotes from "./quoteArr";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
      img: quotes[0].img
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
      img:generateQuote.img,
    });
    this.shuffleQuotes(quotes);


  };

  render() {
    return (
      <div>
        <h1 className= "page-title" >Simpsons Quote Generator!</h1>
      <QuoteBox
      handleClick={this.handleClick}
      {...this.state}
    />

    </div>
    )
  }
} 


export default App;
