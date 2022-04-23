import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import { ReactComponent as Icon } from "./images/icon-dice.svg";

function Body(props) {
  const { quoteNum, quoteBody } = props;

  return (
    <>
      <h2>
        Advice #<span>{quoteNum}</span>
      </h2>
      <p>"{quoteBody}"</p>
    </>
  );
}

function Button(props) {
  const { getQuote } = props;

  const addHoverEffect = (e) => {
    e.target.classList.add("button-hover");
  };
  const removeHoverEffect = (e) => {
    e.target.classList.remove("button-hover");
  };
  const handleClick = (e) => {
    getQuote()
  }

  return (
    <button
      onMouseEnter={addHoverEffect}
      onMouseLeave={removeHoverEffect}
      onClick={handleClick}
    >
      <Icon />
    </button>
  );
}

export default function App() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    // slightly modify URL so that Firefox doesn't use cached API response
    const appStr = new Date().getTime();
    axios
      .get(`https://api.adviceslip.com/advice?t=${appStr}`)
      .then((res) => setQuote(res.data.slip))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => getQuote(), []);

  return (
    <div className="App">
      <Body quoteNum={quote.id} quoteBody={quote.advice} />
      <div className="separator"></div>
      <Button getQuote={getQuote} />
    </div>
  );
}
