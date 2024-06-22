import { useState } from 'react'
import './App.css'
import Image from "./components/Image"
import Stats from "./components/Stats"
import axios from 'axios'

function App() {
  const [name, setName] = useState("")
  const [heroData, setHeroData] = useState(null)
  const TOKEN = "1f70b8d7a4d9c9e8630ddd81ae01079f"
  const BASE_URL = "https://cors-proxy-superhero-api.onrender.com"

  const getHeroDataByName = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`${BASE_URL}/${TOKEN}/getByName/${name}`)
      console.log(response.data.results[0])
      setHeroData(response.data.results[0])
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
      <form onSubmit={getHeroDataByName}>
        <input placeholder='Enter hero name' type='text' onChange={(e) => { setName(e.target.value) }} />
        <button type='submit'>Find</button>
      </form>
      {heroData && <Image imageUrl={heroData.image.url} />}
      {heroData && <Stats stats={heroData.powerstats} />}
    </div>
  )
}

export default App
