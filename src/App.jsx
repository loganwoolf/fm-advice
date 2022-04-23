import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import Body from "./components/Body";
import Button from "./components/Button";

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
