import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

  const [password, setPassword] = useState("hello")
  const [length, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [special, setSpecial] = useState(false)
  const [copied, setCopied] = useState(false)


  const inputRef = useRef(null)
  const generatePassword = useCallback(() => {
    
    if (length <= 0) return
    let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const num = '0123456789'
    const spchar = '~!@#$%^&*()_?/|_-'
    let generatedPass = ''

    if (number) charSet += num
    if (special) charSet += spchar

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * charSet.length)
      generatedPass += charSet[random]
    }

    setPassword(generatedPass)
  }, [length, number, special])

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inputRef.current.value)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      })
  }

  return (
    <main className="w-screen h-screen bg-zinc-900 text-white flex flex-col items-center justify-center gap-8 px-4">

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Password Generator
      </h1>

      <div className="bg-white text-zinc-700 w-full max-w-2xl rounded-xl shadow-lg p-6 flex flex-col gap-6">

        {/* Password Field */}
        <div className="flex w-full h-12 rounded-md overflow-hidden border border-zinc-300">
          <input
            ref={inputRef}
            type="text"
            value={password}
            disabled
            placeholder="Enter your password"
            className="flex-grow px-4 outline-none bg-zinc-100 text-sm"
          />
          <button
            onClick={copyToClipboard}
            className='px-6 bg-blue-600  text-white font-medium hover:bg-blue-500 transition'>
            {copied ? "copied" : "copy"}
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4">

          {/* Length Slider */}
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium">Length</span>
            <span className="text-sm font-medium" >{length}</span>
            <input
              type="range"
              min="4"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="flex-grow accent-blue-600 cursor-pointer"
            />
          </div>

          {/* Options */}
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                checked={number}
                onChange={() => setNumber(!number)}
                type="checkbox"
                className="accent-blue-600" />
              Numbers
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                checked={special}
                onChange={() => setSpecial(!special)}
                type="checkbox" className="accent-blue-600" />
              Special Characters
            </label>
          </div>

        </div>
      </div>
    </main>
  )
}

export default App