
import QuoteCard from "./card-component";
import React from "react";
import "./styles.css"

import quotes from "./quoteArr";
import './styles.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
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
    });
    this.shuffleQuotes(quotes);

    // this.shuffleQuotes(author);
  };

  render() {
    return (
      <div>
      <QuoteCard
      handleClick={this.handleClick}
      {...this.state}
    />

    </div>
    )
  }
} 


export default App;
