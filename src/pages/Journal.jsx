import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import me from '../assets/me.jpg'

const Journal = () => {
  return (
   <Container>
    <Flex className={'py-10'}>
        <div className='w-2/4'>
        <h2 className='font-dms font-bold text-[39px] text-t-color mt-28 mb-10'>
         Hello , I'm Mishu Rahman Tushar.
        </h2>
        <p className='font-dms font-bold text-base text-drop mb-3 mt-5'>
        I'm a MERN stack developer passionate about crafting seamless web applications with JavaScript, React, Node.js, and MongoDB. Let's turn ideas into reality together!"
        </p>
        </div>
        <div className='w-2/4 overflow-hidden'>
        <Image src={me}/>
        </div>
    </Flex>
   </Container>
  )
}

export default Journal