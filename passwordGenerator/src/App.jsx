import { useState , useCallback , useEffect , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")
  const passRef = useRef(null);

  const copyPassword = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+= "0123456789"
  if(charAllowed) str+= "`~!@#$%^&*()_-+=[]{}"

  for(let i=1 ; i<=length ; i++){
    let char = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(char)
  }

  setPassword(pass)
  
} , [length,numberAllowed,charAllowed,setPassword])

useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,setPassword])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-md px-4 my-8 text-orange-400 bg-gray-600'>
        <h1 className='text-white text-center my-3 pt-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
            value={password}
            className='outline-none w-full py-1 px-3 pb-3 mb-5 rounded-lg'
            placeholder='password'
            readOnly
            ref={passRef}
          />
          <button onClick={copyPassword} class="bg-blue-600 text-white font-bold py-2 px-4 rounded-md h-10 w-18 ml-3">copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 mb-3'>
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1 mb-3'>
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 mb-3'>
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='CharacterInput'
            onChange={()=>{
              setCharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="CharacterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
