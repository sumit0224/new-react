import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const apiKey = 'fe1190964f085678fbe81299c4bd466b'
  const [place, setPlace] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const getData = async (place = "delhi") => {
    try {
      setLoading(true)
      setError(null)
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=metric`)
      setData(res.data)
    } catch (error) {

      setError("❌something went worng!!")
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    getData(place)
    setPlace("")
  }
  const handleChange = (e) => {
    setPlace(e.target.value)

  }


  return (
    <main className="min-h-screen bg-green-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-3xl p-6 text-white">

        <h1 className="text-3xl font-bold text-center mb-6 tracking-wide">
          🌤 Weather App
        </h1>

        {error && (
          <p className="bg-red-500/20 border border-red-400 text-red-200 text-sm p-2 rounded-lg mb-3 text-center">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex gap-2 mb-6"
        >
          <input
            value={place}
            onChange={handleChange}
            type="text"
            placeholder="Enter city..."
            className="flex-1 px-4 py-2 rounded-xl bg-white/20 placeholder-white/70 text-white outline-none border border-white/30 focus:ring-2 focus:ring-white"
          />

          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-white text-blue-600 font-semibold hover:bg-blue-100 transition"
          >
            Search
          </button>
        </form>

        <div className="text-center">
          {loading && (
            <p className="animate-pulse text-white/80">Loading...</p>
          )}

          {data && (
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">
                {data.name}
              </h2>

              <p className="text-5xl font-bold">
                {Math.round(data.main.temp)}°C
              </p>

              <p className="capitalize text-lg text-white/90">
                {data.weather[0].description}
              </p>

              <div className="flex justify-between mt-4 text-sm text-white/80">
                <p>💧 Humidity: {data.main.humidity}%</p>
                <p>🌡 Feels: {Math.round(data.main.feels_like)}°C</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </main>
  )
}

export default App
