import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4'>Tailwind</h1>
      <Card username="Rishi" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?" btnText="Click me"/>
      <Card username="Rohit" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?" btnText="Visit me"/>
    </>
  )
}

export default App
