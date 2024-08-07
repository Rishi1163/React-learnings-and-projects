import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [color, setColor] = useState("blue")

  const changeColor = (newColor) => {
    console.log(`Changing color to ${newColor}`);
    setColor(newColor);
  }

  return (
   <div className='w-full h-screen' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-3 inset-x-0 px-2'>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg ">
        <button 
        onClick={() => changeColor("red")}
        className='outline-none px-4 py-1 rounded-md shadow-lg'
        style={{backgroundColor:"red"}}>Red</button>
         <button 
         onClick={() => changeColor("green")}
         className='outline-none px-4 py-1 rounded-md shadow-lg'
        style={{backgroundColor:"green"}}>Green</button>
         <button 
         onClick={() => changeColor("blue")}
         className='outline-none px-4 py-1 rounded-md shadow-lg'
        style={{backgroundColor:"blue"}}>Blue</button>
         <button 
         onClick={() => changeColor("yellow")}
         className='outline-none px-4 py-1 rounded-md shadow-lg'
        style={{backgroundColor:"yellow"}}>Yellow</button>
      </div>
    </div> 

   </div>
  )
}

export default App
