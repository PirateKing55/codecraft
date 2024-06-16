import './App.css'
import { useState, useEffect } from 'react'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => { setInterval(() => { setCount((prev) => prev + 1) }, 1000) }, [])

  const increaseCount = () => {
    if (count < 10) {
      setCount((prev) => prev + 1)
    }
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1)
    }
  }

  return (
    <div>
      <Signup countProps={count} />
      app: {count}
      <br></br>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  )
}

export default App

