import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-container mx-auto px-2 ${className}`}>
    {children}
    </div>
  )
}

export default Container