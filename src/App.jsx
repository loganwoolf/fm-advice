import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import { ReactComponent as Separator } from './images/pattern-divider-desktop.svg'
import { ReactComponent as Icon } from './images/icon-dice.svg'

function Body(props) {
  const { quoteNum, quoteBody } = props

  return (
    <>
      <h2>
        Advice #<span>{quoteNum}</span>
      </h2>
      <p>"{quoteBody}"</p>
    </>
  )
}

function Button(props) {
  const { getQuote } = props

  return (
    <button onClick={getQuote}>
      <Icon />
    </button>
  )
}

export default function App() {
  const [quote, setQuote] = useState('')

  const getQuote = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then(res => console.log(res.data.slip) || setQuote(res.data.slip))
      .catch(err => console.log(err.message))
  }

  useEffect(() => getQuote(), [])

  return (
    <div className="App">
      <Body quoteNum={quote.id} quoteBody={quote.advice} />
      <Separator />
      <Button getQuote={getQuote} />
    </div>
  )
}
