import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <h2>{count}</h2>
    <button onClick={function inc(){count=setCount(count+1)}}>Increment</button>
    </>
  )

//   function incr()
//   {
//     let count=document.getElementById('count').textContent;
//     let num=

//   return (
//     <>

//     <h2 id='count'>0</h2>
//     <button onClick={incr}>Increment</button>
//     </>
    
//   )
// }
}

export default App
