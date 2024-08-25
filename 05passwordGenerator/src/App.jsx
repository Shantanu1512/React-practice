import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCarAllow] = useState(false);
  const [password, setPassword] = useState("")

  //useRef
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)
  }, [length, numberAllow, charAllow, setPassword])

  const passwordCopy = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() =>{
    generatePassword()
  }, [length, charAllow, numberAllow, generatePassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-9 text-orange-700 bg-gray-700'>
        <h1 className='text-white text-center'>PASS GENERATOR</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}/>

            <button className='outline-none bg-blue-500 text-white px-3 py-2 shrink-0'
            onClick={passwordCopy}>COPY</button>
        </div>  

        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) =>{setLength(e.target.value)}}
                />
                <label>Length:{length}</label>
            </div>  
            <div>
              <input 
              type="checkbox"
              defaultChecked = {numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev)
              }}
              />
              <label>Numbers</label>
            </div>

            <div>
              <input 
              type="checkbox"
              defaultChecked = {charAllow}
              id="charInput"
              onChange={() => {
                setCarAllow((prev) => !prev)
              }}
              />
              <label>Characters</label>
            </div>
        </div>    
      </div>    
    </>
  )
}

export default App
