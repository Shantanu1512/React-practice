import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-2000 transition-shadow' style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 justify-center bg-white shadow-lg px-3 py-2 rounded-3xl'>
          <button 
            className='outline-none px-4 text-white shadow-lg rounded-full transition duration-150 ease-in-out' 
            style={{backgroundColor: "red"}} 
            onClick={() => setColor("red")}>RED
          </button>

          <button 
            className='outline-none px-4 text-white shadow-lg rounded-full motion-reduce:transition-none motion-reduce:hover:transform-none' 
            style={{backgroundColor: "blue"}} 
            onClick={() => setColor("blue")}>BLUE
          </button>

          <button 
            className='outline-none px-4 text-white shadow-lg rounded-full' 
            style={{backgroundColor: "green"}} 
            onClick={() => setColor("green")}>GREEN
          </button>   

          <button 
            className='outline-none px-4 text-white shadow-lg rounded-full' 
            style={{backgroundColor: "yellow"}} 
            onClick={() => setColor("yellow")}>YELLOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
