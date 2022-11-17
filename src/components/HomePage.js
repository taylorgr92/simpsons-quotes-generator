import React from "react";
import QuoteContainer from "./QuoteContainer";
import quotes from "./quote-arr.js";

class Home extends React.Component {
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
      <div>
        <h1 className="page-title">Simpsons Quote Generator!</h1>

        <QuoteContainer handleClick={this.handleClick} {...this.state} />
      </div>
    );
  }
}

export default Home;
