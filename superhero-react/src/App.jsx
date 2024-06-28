import { useState } from 'react'
import './App.css'
import Image from "./components/Image"
import Stats from "./components/Stats"
import Message from "./components/Message"
import axios from 'axios'

function App() {
  const [name, setName] = useState("")
  const [heroData, setHeroData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const TOKEN = ""
  const BASE_URL = "https://cors-proxy-superhero-api.onrender.com"

  const getHeroDataByName = async (e) => {
    e.preventDefault()
    setError(false)
    setLoading(true)
    try {
      const response = await axios.get(`${BASE_URL}/${TOKEN}/getByName/${name}`)
      console.log(response.data.results[0])
      setLoading(false)
      setHeroData(response.data.results[0])
    } catch (error) {
      console.log(error)
      setError(true)
      setLoading(false)
    }

  }

  const getRandomHero = async () => {
    setError(false)
    setLoading(true)
    const ID = Math.ceil(Math.random() * 731)
    try {
      const response = await axios.get(`${BASE_URL}/${TOKEN}/getById/${ID}`)
      console.log(response.data)
      setLoading(false)
      setHeroData(response.data)
    } catch (error) {
      console.log(error)
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div className='app-container'>
      <form onSubmit={getHeroDataByName}>
        <input className='form-input' placeholder='Enter hero name' type='text' onChange={(e) => { setName(e.target.value) }} />
        <div className='form-btns-container'>
          <button className='form-btn' type='submit'>Find</button>
          <button className='form-btn' onClick={getRandomHero} type='button'>Random</button>
        </div>
      </form>

      <Message loading={loading} error={error} />


      {(!loading && !error) ? heroData && <Image imageUrl={heroData.image.url} name={heroData.name} /> : null}
      {(!loading && !error) ? heroData && <Stats stats={heroData.powerstats} /> : null}

    </div>
  )
}

export default App
