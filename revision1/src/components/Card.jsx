import React from 'react'

const Card = ({bgcolor , text , content="guest"}) => {
  return (
    <div style={{fontSize : text}} className={`w-[300px] h-[400px] bg-${bgcolor}-300 `}>

        {content}
    </div>
  )
}

export default Card
