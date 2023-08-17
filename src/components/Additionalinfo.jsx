import React from 'react'
import Container from './Container'
import Flex from './Flex'
import {PiNumberTwoBold} from 'react-icons/pi'
import {FaTruckMoving} from 'react-icons/fa'
import {GiBackwardTime} from 'react-icons/gi'

const Additionalinfo = () => {
  return (
    <Container>
        <Flex className={"justify-between py-5 px-1 "}>
            <div className='flex text-dms text-normal text-[10px] md:text-sm items-center gap-1 md:gap-3'>
                <PiNumberTwoBold className='font-bold text-lg'/>
                <p>Two years warranty</p>
            </div>
            <div className='flex text-dms text-normal text-[10px] md:text-sm items-center gap-1 md:gap-3'>
                <FaTruckMoving className='font-bold md:text-xl text-lg'/>
                <p>Free shipping</p>
            </div>
            <div className='flex text-dms text-normal text-[10px] md:text-sm items-center gap-1 md:gap-3'>
                <GiBackwardTime className='font-bold text-xl'/>
                <p>Return policy in 30 days </p>
            </div>
        </Flex>
    </Container>
  )
}

export default Additionalinfo