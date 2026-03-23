import React from 'react'

const Dashboard = () => {
  return (
    <div className="w-screen min-h-screen bg-zinc-900 text-white p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button className="bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-600">
          Logout
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-zinc-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Tasks</h2>
          <p className="text-2xl mt-2">12</p>
        </div>

        <div className="bg-zinc-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Completed</h2>
          <p className="text-2xl mt-2">8</p>
        </div>

        <div className="bg-zinc-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Pending</h2>
          <p className="text-2xl mt-2">4</p>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-zinc-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>

        <ul className="space-y-3">
          <li className="bg-zinc-700 p-3 rounded-lg flex justify-between">
            <span>Learn React Hooks</span>
            <span className="text-green-400">Done</span>
          </li>

          <li className="bg-zinc-700 p-3 rounded-lg flex justify-between">
            <span>Build Todo App</span>
            <span className="text-yellow-400">Pending</span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Dashboard