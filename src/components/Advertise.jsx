import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import ad1 from '../assets/ad1.png'
import ad2 from '../assets/ad2.png'
import ad3 from '../assets/ad3.png'
import { Link } from 'react-router-dom'

const Advertise = () => {
  return (
    <div className='mt-4 md:mt-36'>
          <Container className>
        <Flex className={" gap-x-5 md:gap-x-10"}>
            <div className='max-w-1/2'>
            <Link to='#'><Image src={ad1} /></Link>
            </div>
            <div className='max-w-1/2'>
                <Link to='#'><Image src={ad2} /></Link>
                <Link to="#"><Image className={'inline-block mt-2.5 md:mt-10'} src={ad2} /></Link>
            </div>
        </Flex>
    </Container>
    </div>
  )
}

export default Advertise