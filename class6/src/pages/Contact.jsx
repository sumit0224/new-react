import React from 'react'

const Contact = () => {
    const data = useParams()
  return (
    <div>
      Contact page {data.id}
    </div>
  )
}

export default Contact
