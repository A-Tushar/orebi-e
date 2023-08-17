import React from 'react'
import Container from '../components/Container'
import {IoMdArrowDropright} from 'react-icons/io'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <Container className={" mt-10 md:mt-32"}>
        <h1 className='font-dms text-5xl font-bold text-drop mb-3 capitalize'>{window.location.pathname.split("/")[1]}</h1>
          <div className='font-dms text-xs capitalize font-normal text-t-color flex items-center'> 
        <Link to='/'> Home </Link><IoMdArrowDropright className='font-bold text-xl'/> {window.location.pathname.split("/")[1]} </div>
    </Container>
   
  )
}

export default Breadcrumb