import React from 'react'
import Image from './Image'
import Badge from './Badge'
import Flex from './Flex'
import {AiFillHeart} from 'react-icons/ai'
import {MdCompareArrows} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'

const Product = ({productsSrc,badge,badgetitle,brandname,productTitle,price}) => {
  return (
    <div className='mx-2 sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
        <div className='relative overflow-y-hidden group'>
        <Image src={productsSrc}/>
        {badge &&(<Badge title={badgetitle}/>)}

        <div className='bg-white  h-40 absolute bottom-[-100%] lg:max-xl:bottom-[-80%] left-0 w-full py-6 pr-8  lg:max-xl:py-4 group-hover:bottom-0  lg:max-xl:group-hover:bottom-[-50px] ease-in-out duration-300'>
            <div className='flex text-dms text-normal text-base lg:max-xl:text-[10px] text-t-color justify-end items-center gap-4 md:gap-3 hover:text-drop hover:font-bold ease-in cursor-pointer' >
                <p>Add to Wish List</p>
                <AiFillHeart className='font-bold text-lg text-drop '/>
            </div>
            <div className='flex text-dms text-normal text-base lg:max-xl:text-[10px] text-t-color justify-end items-center gap-4 md:gap-3 hover:text-drop hover:font-bold my-5  lg:max-xl:my-2 ease-in cursor-pointer'>
                <p>Compare</p>
                <MdCompareArrows className='font-bold text-xl text-drop '/>
            </div>
            <div className='flex text-dms font-normal text-base lg:max-xl:text-[10px] text-t-color justify-end items-center gap-4 md:gap-3 hover:text-drop hover:font-bold  ease-in cursor-pointer'>
                <p>Add to Cart</p>
                <FaShoppingCart className='font-bold md:text-xl text-lg text-drop '/>
            </div>
        </div>
        </div>

        <div className='mb-3 md:mb-0'>
        <Flex className={"md:mt-6 flex justify-between items-center"}> 
            <h3 className='text-dms font-bold text-xl lg:max-xl:text-base'>{productTitle}</h3>
            <p className='text-dms font-normal text-base lg:max-xl:text-sm text-t-color'>{price}</p>
        </Flex>
         <p className='text-dms font-normal text-base lg:max-xl:text-base text-t-color mt-4'>{brandname}</p>
        </div>
    </div>
  )
}

export default Product