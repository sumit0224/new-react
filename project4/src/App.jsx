import React from 'react'
import Form from './component/Form'
import TaskList from './component/TaskList'

const App = () => {
  return (
    <div className='w-screen h-screen bg-blue-300 flex items-center px-5 py-2 justify-between  '>
      <Form/>
      <TaskList/>
    </div>
  )
}

export default App
