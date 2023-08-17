import React, { useState } from 'react'
import Flex from './Flex'
import {GoTriangleDown,GoTriangleUp} from 'react-icons/go'
import Sidebaritems from './Sidebaritems'
import  {Catagory, color, brands, prices} from '../Data/Data'

const Sidebarcontent = ({title,dropdown,data}) => {

    let [show, setShow]=useState(dropdown)
    let [drop,setdrop]=useState(dropdown)

  return (
    <div className='mb-14'>
        {/* jodi dropdown thake  */}

        {drop?
         (<div onClick={()=>{setShow(!show)}} className={'flex items-center justify-between cursor-pointer mb-9'}>
            <h3 className='font-dms font-bold text-xl text-drop'>
                {title}
            </h3>
            {show ?
                (<GoTriangleUp/>)
                :
                (<GoTriangleDown/>)
            }
            </div>
        )
        : 
        (<h3 className='flex font-dms font-bold text-xl text-drop cursor-pointer mb-9'>
            {title}
        </h3>)
        }

        {/* click korle show korbe , jodi show true hoy , flase thakle show korbe na  */}

        {show && (
            <>
            {data.map((item,index)=>(
                
                // items er jodi kono subcatagory thake tahole 

                item.subcatagory ? (
                    <Sidebaritems 
                    itemTitle={item.name}
                    itemsDropdown={item.subcatagory? true:false} 
                    >
                    {item.subcatagory.map((sitem)=>(
                         <h2 className='font-dms font-normal text-sm text-t-color border-b border-solid border-[#767676] py-5'>
                            {sitem.name}
                         </h2>
                    ))}
                    </Sidebaritems> 

                )  : 
                // ar jodi subcatagory na thake tahole 
                (

                    <Sidebaritems 
                        itemTitle={item.name}
                        itemsDropdown={item.subcatagory? true:false} 
                        color={item.code} >               
                    </Sidebaritems>
                )
            ))}
            </>
        )}


        {!drop && (
          <>
           {data.map((item,index)=>(
                
                // items er jodi kono subcatagory thake tahole 

                item.subcatagory ? (
                    <Sidebaritems 
                    itemTitle={item.name}
                    itemsDropdown={item.subcatagory? true:false} 
                    >
                    {item.subcatagory.map((sitem)=>(
                         <h2 className='font-dms font-normal text-sm text-t-color border-b border-solid border-[#767676] py-5'>
                            {sitem.name}
                         </h2>
                    ))}
                    </Sidebaritems> 

                )  : 
                // ar jodi subcatagory na thake tahole 
                (

                    <Sidebaritems 
                        itemTitle={item.name}
                        itemsDropdown={item.subcatagory? true:false} 
                        color={item.code} >               
                    </Sidebaritems>
                )
            ))}
          </>
        )}
   

    </div>
  )
}

export default Sidebarcontent