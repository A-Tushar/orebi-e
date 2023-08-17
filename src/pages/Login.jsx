import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import Flex from '../components/Flex'
import Inputs from '../components/Inputs'
import Button from '../components/Button'


const Login = () => {
  return (
   <Container>
    <Breadcrumb/>

    <div className='font-dms font-normal text-base text-t-color mt-32 w-[40%]'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
    </div>
    
    <h2 className='font-dms font-bold text-[39px] text-drop mt-28 mb-10'>
    Returning Customer
    </h2>
    <Flex className={'w-2/4 justify-between'}>
    <Inputs type={'text'} title={"Email address"} placeholder={"Your email here"}/>
    <Inputs title={"Password"} type={'password'} placeholder={'*****'}/>
    </Flex>
    <Button title={"Log in"} className={"!bg-transparent border border-solid border-drop !text-black mt-10"}/>
    <h2 className='font-dms font-bold text-[39px] text-drop mt-28 '>
    New Customer
    </h2>
    <div className='font-dms font-normal text-base text-t-color mt-11 w-[40%]'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
    </div>
    <Button title={"Continue"} className={" border border-solid border-drop mt-10"}/>
   </Container>
  )
}

export default Login