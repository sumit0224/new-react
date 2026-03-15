import React, { useEffect, useState } from 'react'

const TaskList = () => {
  const [data, setData] = useState(() => {
    const value = localStorage.getItem("todo")
    return value ? JSON.parse(value) : []
  })
 

  return (
    <div>
      {
        data.length === 0 
        ? <p>No task</p>
        : data.map((item, index) => (
           <> 
           <h2 key={index}>{item.title}</h2>
           <p>{item.description}</p>
           </>
            
          ))
      }
    </div>
  )
}

export default TaskList