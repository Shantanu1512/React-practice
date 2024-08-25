import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counet, setCount] = useState(0)
  // let counet = 9

  const addVals = () =>{
    setCount( counet + 1)
    console.log(counet);
    
  }

  const remVals = () =>{
    setCount( counet - 1)
    console.log(counet);
    
  }
  return (
    <>
      <h1>This is hooks practice</h1>
      <h2>Value is {counet}</h2>
      <button id="inc" onClick={addVals}>INC</button>
      <button id="dec" onClick={remVals}>DEC</button>
    </>
  )
}

export default App
