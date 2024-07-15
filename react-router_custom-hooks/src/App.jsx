import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className=' w-full h-screen flex justify-center items-center '>
      <Link to={"/stats"} className='text-green-300 dark:text-orange-500 text-3xl font-semibold underline'>Get superhero data</Link>
    </div>
  )
}

export default App




