import { useState } from 'react'

import './App.css'

function App() {
  const [result, setResult] = useState("")
  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult("")
  }
  const backspace = () => {
    setResult(result.slice(0, -1))
    if (result == "Error") {
      setResult("")
    }
  }
  const calculate = () => {
    try {
      setResult(eval(result).toString())
    }
    catch (err) {
      setResult("Error")
    }
  }
  return (
    <>
      <div className="container">
        <form>
          <input type='text' value={result} readOnly />
        </form>
        <div className="keypad">
          <button onClick={clear} id='clear'>AC</button>
          <button onClick={backspace} id='backspace'>DEL</button>
          <button name='%' className='operator' onClick={handleClick}>%</button>
          <button name="/" className='operator' onClick={handleClick} >/</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" className='operator' onClick={handleClick}>X</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" className='operator' onClick={handleClick} >-</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" className='operator' onClick={handleClick} >+</button>
          <button name="0" onClick={handleClick} >0</button>
          <button name="." onClick={handleClick} >.</button>
          <button onClick={calculate} id='result'>=</button>
        </div>
      </div>
    </>
  )
}

export default App
