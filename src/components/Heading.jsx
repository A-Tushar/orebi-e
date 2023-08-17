import React from 'react'

const Heading = ({title,className}) => {
  return (
    <h2 className={`font-dms font-bold text-2xl md:text-4xl text-drop ${className}`}>{title}</h2>
  )
}

export default Heading