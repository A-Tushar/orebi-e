import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import Product from './Product'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'


const Offers = () => {
  return (
   <Container className={"my-6 md:my-32"}>
    <Heading title={"Special Offers"} className={"mb-5 md:mb-12"}/>
    <div className='md:gap-x-5 sm:flex sm:max-md:justify-between sm:max-lg:flex-wrap'>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p5} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p6} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p7} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p8} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
    </div>
   </Container>
  )
}

export default Offers