import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15
  
  const addValue = () => {
    // counter = counter + 1
    setCounter(counter < 20 ? counter + 1: counter)
    // console.log("clicked", counter);
  }
  

  const removeValue = () => {
    setCounter(counter > 0 ? counter - 1 : counter)
  }
  

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter} </h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
