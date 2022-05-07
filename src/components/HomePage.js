import React from "react";
import QuoteContainer from "./QuoteContainer";
import quotes from "./quote-arr.js";
import { motion } from "framer-motion/dist/framer-motion";


/*quote generator*/
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
      
      <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={0}>
        <h1 className="page-title">Simpsons Quote Generator</h1>
        <div className="detail-p">
          <h2>
            Want to find a new favorite quote from one of the beloved residents
            of Springfield? xxx{" "}
          </h2>
          <span>
            <h2>Press the button below!</h2>
          </span>
        </div>
 
        <QuoteContainer handleClick={this.handleClick} {...this.state} />
      </motion.div>
    );
  }
}

export default Home;