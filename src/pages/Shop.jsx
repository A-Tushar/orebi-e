import React, { useState,useEffect,useRef } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Pagination from '../components/Pagination'
import LeftPartshop from '../components/LeftPartshop'
import {BsFilterCircle} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'


const Shop = () => {

    let [shownumber,setShownumber]=useState(12);
    let [show,setshow]=useState(true);
    let ref = useRef();

    let handlechange = (e)=>{
      setShownumber(e.target.value);
      console.log(shownumber);
    }

    useEffect(()=>{
      function reswidth(){
        if(innerWidth <640){
          setshow(false)
        }else{
          setshow(true)
        }
      }
      reswidth();
     window.addEventListener("resize", reswidth);
    },[]);

    // useEffect(()=>{
    //   document.body.addEventListener("click",(e)=>{
    //     console.log(e.target);
    //     if(ref.current.contains(e.target)){
    //       setshow(true)
    //     }else{
    //       setshow(false)
    //     }
    //   })
    // },[]);


  return (
    <Container>
    <Breadcrumb/>

    <Flex className={"gap-x-10 md:mt-32 mt-10 relative"}>
      {show &&(
        <div className='sm:w-[25%] absolute top-0 left-0 z-30 w-full bg-[rgb(217,210,210)] sm:static sm:bg-transparent p-5  sm:p-0'>
          <AiFillCloseCircle onClick={()=>{setshow(!show)}} className='text-2xl sm:hidden'/>
          <LeftPartshop/>
        </div>
          )}
        <div className='w-full sm:w-[75%] relative'>
        <Flex className={"gap-x-10 md:flex-row-reverse mb-3.5 mx-2 items-center"}>
        <BsFilterCircle onClick={()=>{setshow(!show)}} className='inline-block sm:hidden text-2xl'/>
        <div className="md:flex items-center ">
        <p className='font-normal font-dms text-base text-t-color mr-3.5'>Show :</p>
        <select id="countries" onChange={handlechange} class="bg-gray-50 md:w-[139px] border border-[#F0F0F0] text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block  p-2.5  ">
        <option selected className=' font-normal font-dms text-base'>12</option>
        <option value="24" className=' font-normal font-dms text-base'>24</option>
        <option value="48" className=' font-normal font-dms text-base'>48</option>
        </select>
        </div>
        <div className='md:flex items-center'>
        <p className='font-normal font-dms text-base text-t-color mr-3.5'>Short By:</p>
        <select id="countries" class="bg-gray-50 md:w-[239px] border border-[#F0F0F0] text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block  p-2.5  ">
        <option selected className=' font-normal font-dms text-base'>Featured</option>
        <option value="US" className=' font-normal font-dms text-base'>United States</option>
        <option value="CA" className=' font-normal font-dms text-base'>Canada</option>
        <option value="FR" className=' font-normal font-dms text-base'>France</option>
        <option value="DE" className=' font-normal font-dms text-base'>Germany</option>
        </select>
        </div>
        </Flex>

        <Pagination itemsPerPage={shownumber/2} />
        
        </div>
       
    </Flex>

    </Container>
  )
}

export default Shop