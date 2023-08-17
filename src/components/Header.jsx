import Container from './Container'
import React, { useEffect, useRef, useState } from 'react'
import Flex from './Flex'
import Dropdown from './Dropdown'
import {FaBars,FaSearch,FaUserAlt,FaShoppingCart} from "react-icons/fa"
import {RxTriangleDown} from "react-icons/rx"
import {GrFormClose} from "react-icons/gr"
import Ulist from "./Ulist"
import List from './List'
import Search from './Search'
import Image from "./Image"
import CartButton from "./CartButton"
import img1 from "../assets/cart.png"

const Header = () => {

  let [show,setshow]= useState(false);
  let [usershow,setUsershow]= useState(false);
  let [cartshow,setCartshow]= useState(false);

  let ref = useRef();
  let userref = useRef();
  let cartref = useRef();

  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      if(ref.current.contains(e.target)){
        setshow(true)
      }else{
        setshow(false)
      }

      if(userref.current.contains(e.target)){
        setUsershow(true)
      }else{
        setUsershow(false)
      }

      if(cartref.current.contains(e.target)){
        setCartshow(true)
      }else{
        setCartshow(false)
      }


    })
  },[]);

  return (
    <div className='bg-head py-2.5 px-2.5 '>
        <Container>
        <Flex className={"justify-between items-center gap-1"}>
        <div>
            <Dropdown dropref={ref}>
                <p className='flex items-center gap-2.5 font-dms font-normal text-sm'><FaBars/> <span className='hidden md:block'>Shop by Category</span> </p>
                {show && (
                <Ulist className={"absolute my-2 bg-drop text-t-color w-60 text-dms text-xs font-normal z-50"}>
                  <List className={"py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-6 duration-100 ease-in"}>Accesories</List>
                  <List className={"py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-6 duration-100 ease-in"}>Furniture</List>
                  <List className={"py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-6 duration-100 ease-in"}>Electronics</List>
                  <List className={"py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-6 duration-100 ease-in"}>Clothes</List>
                  <List className={"py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-6 duration-100 ease-in"}>Bags</List>
                  <List className={"py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-6 duration-100 ease-in"}>Home Appliances</List>
                </Ulist>
                )}
            </Dropdown>
        </div>
        <div className='w-auto lg:w-[600px] relative'>
        <Search className={" w-full py-4 px-5 placeholder:text-400-xs placeholder:font-dms"} placeholder={"Search Produtcs"}/>
        <FaSearch className='absolute top-5 right-6'/>
        </div>
        <div>
          <Flex className={"gap-10"}>
            <div>
              <Dropdown dropref={userref} className={"flex items-center relative"}>
              <FaUserAlt/>
              <RxTriangleDown/>
              {usershow && (
                <Ulist className={"absolute top-9 right-0 bg-white text-black w-[200px] text-dms text-xs font-bold text-center z-50"}>
                  <List href={"/login"} className={"py-4 px-5 border border-solid border-head hover:bg-black hover:text-white hover:px-6 duration-100 ease-in"}>My Account</List>
                  <List className={"py-4 px-5 border border-solid border-head hover:bg-black hover:text-white hover:px-6 duration-100 ease-in"}>Log Out</List>
                  
                </Ulist>
                )}
              </Dropdown>
            </div>
            <div>
              <Dropdown dropref={cartref} className={"flex items-center relative"}>
              <FaShoppingCart className='text-lg'/>
              {cartshow && (
                <div className='absolute top-9 right-0 bg-head w-[360px] text-dms font-bold z-50'>
                  <Flex className={"p-4 justify-between items-center border border-solid border-head"}>
                  <Image src={img1}/>
                   <div>
                    <h3 className='font-dsm text-sm font-bold text-drop'>Black Smart Watch</h3>
                    <p className='font-dsm text-sm font-bold text-drop mt-3'>$44.00</p>
                   </div>
                   <div className='ml-20'>
                    <GrFormClose className='font-bold text-lg cursor-pointer'/>
                   </div>
                  </Flex>
                  <div className='p-5 gap-5 bg-white border border-solid border-head'>
                    <div className='font-dsm flex mb-3'>
                      <h3 className='font-normal text-base text-t-color'>Subtotal:</h3>
                      <h3 className='font-bold text-base text-drop mx-1'>$44.00</h3>
                    </div>
                    <div className='flex justify-between'>
                    <CartButton text={"View Cart"} className={"py-4 px-10 border-2 border-solid border-drop hover:bg-drop hover:text-white "}/>
                    <CartButton text={"Checkout"} className={"py-4 px-10 border-2 border-solid border-drop  hover:bg-drop hover:text-white "}/>
                    </div> 
                  </div>
                </div>
                
                )}
              </Dropdown>
            </div>
          </Flex>
        </div>
        </Flex>
        </Container>
    </div>
  )
}

export default Header