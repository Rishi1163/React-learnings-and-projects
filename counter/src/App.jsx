import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  function addValue(e){
    if(counter===20){
      return setCounter === 20;
    }
    setCounter(counter+1);
    e.preventDefault();
  }

  function removeValue(e){
    if(counter===0){
      return setCounter === 0;
    }
    setCounter(counter-1)
    e.preventDefault();
  }

  return (
    <>
      <h1>Rishi</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
