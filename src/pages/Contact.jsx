import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import Inputs from '../components/Inputs'
import Button from '../components/Button'

const Contact = () => {
  return (
    <Container>
        <Breadcrumb/>
        <h2 className='font-dms font-bold text-[39px] text-drop mt-28 mb-10'>
        Fill up a Form
        </h2>
        <Inputs type={'text'} title={"Name"} placeholder={"Your name here"}/>
        <Inputs type={'text'} title={"Email"} placeholder={"Your email here"}/>
        <Inputs title={"Message"} areaplaceholder={"Your message here"}/>
        <Button title={"Post"} className={"mt-10"}/>
    </Container>
  )
}

export default Contact