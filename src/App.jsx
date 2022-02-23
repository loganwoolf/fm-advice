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
  return (
    <button>
      <Icon />
    </button>
  )
}

function App() {
  return (
    <div className="App">
      <Body quoteNum="117" quoteBody="It is easy to sit up and take notice, what's difficult is getting up and taking action." />
      <Separator />
      <Button />
    </div>
  )
}

export default App
