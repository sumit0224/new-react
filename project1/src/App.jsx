import React, { useState } from 'react'

const App = () => {

  let [count, setCount] = useState(2)
  const [error, setError] = useState(null)


  function plus() {
    setCount(count + 1)

  }
  function minus() {
    if(count<=0){
      setError("error")
      return
    }

    setCount(count - 1)
  }
  function reset() {
    setCount(0)
  }
  return (
    <>
      <div className='w-full h-screen bg-zinc-800 text-white flex justify-center items-center flex-col gap-4'>
        <h1 className='text-4xl text-blue-400 font-semibold uppercase  '>Counter APP</h1>
        {error &&
          <p>
            you can't go below zero         
          </p>}
        <div className='p-15 bg-white text-zinc-700 text-5xl rounded-2xl '>
          {count}
        </div>
        <div className='flex gap-2.5'>
          <button
            onClick={plus}
            className='px-5 py-2 bg-amber-50 text-lg text-black uppercase rounded-lg  hover:bg-amber-100  active:bg-blue-500'
          >plus</button>
          <button onClick={minus}
            className='px-5 py-2 bg-amber-50 text-lg text-black uppercase rounded-lg  hover:bg-amber-100  active:bg-blue-500 '
          >minus</button>
          <button onClick={reset}
            className='px-5 py-2 bg-amber-50 text-lg text-black uppercase rounded-lg  hover:bg-amber-100  active:bg-blue-500'
          >reset</button>
        </div>


      </div>

    </>
  )
}

export default App
