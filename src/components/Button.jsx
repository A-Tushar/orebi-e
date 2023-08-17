import React from 'react'

const Button = ({title,className}) => {
  return (
   <button className={`font-dms font-bold text-sm text-white bg-drop w-[200px] py-4 ${className}`}>{title}</button>
  )
}

export default Button