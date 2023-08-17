import React from 'react'

const SelectDropdown = (props) => {
  return (
    <>
    <div className="md:flex items-center ">
        <p className='font-normal font-dms text-base text-t-color mr-3.5'>{title}</p>
        <select id="countries" onChange={handlechange} class={`bg-gray-50 md:w-[139px] border border-[#F0F0F0] text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block  p-2.5 ${className}`}>
        <option selected className=' font-normal font-dms text-base'>12</option>
        <option value={value1} className=' font-normal font-dms text-base'>{option1}</option>
        <option value={value2} className=' font-normal font-dms text-base'>{option2}</option>
        </select>
        </div>
    </>
  )
}

export default SelectDropdown