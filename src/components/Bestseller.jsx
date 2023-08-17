import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import Product from './Product'
import p9 from '../assets/p9.png'
import p10 from '../assets/p10.png'
import p11 from '../assets/p11.png'
import p12 from '../assets/p12.png'


const Bestseller = () => {
  return (
   <Container className={"my-6 md:my-32"}>
    <Heading title={"Our Bestsellers"} className={"mb-5 md:mb-12"}/>
    <div className='md:gap-x-5 sm:flex sm:max-md:justify-between sm:max-lg:flex-wrap'>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p9} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p10} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p11} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p12} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
    </div>
   </Container>
  )
}

export default Bestseller