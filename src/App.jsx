// import { useState } from 'react'
// import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <img src= {reactLogo}  style={{ width: "40px" }} />
    <h1>Fun facts about React</h1>
    <ul  style={{ textAlign: "left" }}>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including <n/> mobile apps</li>
    </ul>
    </>
  )
}

export default App
