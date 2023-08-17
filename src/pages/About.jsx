import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ap2 from '../assets/ap2.png'
import Description from '../components/Description'

const About = () => {
  return (
    <Container>
        <Breadcrumb/>
        <Flex className={'pt-32 flex-col sm:flex-row sm:gap-x-10 gap-y-5   sm:gap-y-0'}>
            <div className='w2/4'>
                <Image src={ap2} />
            </div>
            <div className='w2/4'>
                <Image src={ap2} />
            </div>
        </Flex>
        <div className='mt-32 mb-28'>
            <h3 className='font-dms font-normal text-[39px] text-drop'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h3>
        </div>
        <Flex className={'justify-between gap-x-10'}>
            <Description title={"Our Vision"} 
            peragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."}/>
            <Description title={"Our Story"} 
            peragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."}/>
            <Description title={"Our Brands"} 
            peragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."}/>
        </Flex>

    </Container>
  )
}

export default About