import React, { useState } from "react";
import QuoteContainer from "./QuoteContainer";
import quotes from "./quote-arr.js";



const Home = () => {
  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState(quotes[0].author);
  const [image, setImage] = useState(quotes[0].image);

  const randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }
  const shuffleQuotes = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  }
  const handleClick = () => {
    const generateQuote = randomQuote();
    setQuote(generateQuote.quote);
    setAuthor(generateQuote.author);
    setImage(generateQuote.image);
    shuffleQuotes(quotes);
  };

  return (
    <div>
      <h1 className="page-title">Simpsons Quote Generator!</h1>

      <QuoteContainer handleClick={handleClick} quote={quote} author={author} image={image} />
    </div>
  );
}

export default Home;
