import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const data = useParams()
    console.log(data)

  return (
    <div>
      hello {data.username}
    </div>
  )
}

export default Profile
