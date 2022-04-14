import QuoteBox from "./QuoteContainer";
import React from "react";

import "./styles.css";
import MyFooter from './MyFooter';

import quotes from "./QuoteArr";


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

    <div>
    <div>
        <h1 className="page-title">Simpsons Quote Generator!</h1>
        </div>
        <QuoteBox handleClick={this.handleClick} {...this.state} />
    
      <MyFooter />

      </div>
 
      
    );
  }
}

export default App;
