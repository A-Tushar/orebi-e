import React from 'react'

const Inputs = ({title,placeholder,areaplaceholder,type}) => {
  return (
    <div className='w-full'>
        <h3 className='font-dms font-bold text-base text-drop mb-3 mt-5 '>
            {title}
        </h3>

        {placeholder && (<input type={type} placeholder={placeholder} className='font-dms font-normal text-sm text-drop placeholder:font-dms placeholder:font-normal placeholder:text-sm placeholder:text-t-color border-b border-solid border-[#F0F0F0] focus:outline-transparent  pb-4 w-2/4' />)}

        {areaplaceholder && (<textarea placeholder={areaplaceholder} className='w-2/4 focus:outline-transparent' ></textarea>)}
        
        
    </div>
  )
}

export default Inputs