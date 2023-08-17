import React from 'react'
import Image from './Image'
import ads2 from '../assets/middleads2.png'
import Container from './Container'
import { Link } from 'react-router-dom'

const Middleadvertise = () => {
  return (
   <Container className={"md:my-32"}>
    <Link to='#'>
    <Image src={ads2}/>
    </Link>
   </Container>
  )
}

export default Middleadvertise