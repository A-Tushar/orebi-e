import React from 'react'

const Description = ({title,peragraph}) => {
  return (
   <div>
   <h2 className='font-dms font-bold text-2xl text-drop'>{title}</h2>
            <p className='font-dms font-normal text-base  text-t-color xl:w-[506px]'>{peragraph}</p>
   </div>
  )
}

export default Description