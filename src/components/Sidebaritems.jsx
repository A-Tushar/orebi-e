import React, { Children, useState } from 'react'
import {GoPlus} from 'react-icons/go'
import {BiMinus} from 'react-icons/bi'

const Sidebaritems = (props) => {

    
    let [show, setShow]=useState(false)
    let [drop,setdrop]=useState(props.itemsDropdown)

  return (
    <div>
         
        {drop?
         (<div onClick={()=>{setShow(!show)}} className={'flex items-center justify-between cursor-pointer mb-5 border-b border-solid border-[#767676] pb-5'}>

            <h3 className='font-dms font-normal text-base text-t-color'>
            {props.color && (<span className='inline-block w-[11px] h-[11px] rounded-full mr-2' style={{background:props.color}}></span>)}
             {props.itemTitle}
            </h3>

            {show ?
                (<BiMinus className='text-lg font-bold text-black'/>)
                :
                (<GoPlus className='text-lg font-bold text-black'/>)
            }
            </div>
        ):
        
        (<h3 className='flex items-center font-dms font-normal text-base text-t-color cursor-pointer mb-5 border-b border-solid border-[#767676] pb-5'>
            {props.color && (<span className='inline-block w-[11px] h-[11px] rounded-full mr-2' style={{background:props.color}}></span>)} {props.itemTitle}
        </h3>)
        }
        {show && (
            <div>
             {props.children}
            </div>
        )}
         
   

    </div>
  )
}

export default Sidebaritems