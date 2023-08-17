import React from 'react'

const Badge = ({title}) => {
  return (
    <div className='py-2 px-8 bg-drop text-sm font-dms font-bold text-white inline-block absolute top-5 left-5'>{title}</div>
  )
}

export default Badge