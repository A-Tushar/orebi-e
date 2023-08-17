import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import Product from './Product'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import Slider from "react-slick";
import {FiArrowLeft,FiArrowRight} from 'react-icons/fi'


const Newarraival = () => {

    var settings = {
        dots: true,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
              }
            }
          ]
      };
      
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className="bg-[rgba(0,0,0,.2)] w-16 h-16 rounded-full text-center !flex items-center justify-center text-white text-xl absolute top-[35%] right-[25px]"
            style={{ ...style, }}
            onClick={onClick}
          > 
         <FiArrowRight/>
          </div>
        );
      };
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className="bg-[rgba(0,0,0,.2)] w-16 h-16 rounded-full text-center !flex items-center justify-center text-white text-xl absolute top-[35%]            left-0 z-50"
            style={{ ...style, }}
            onClick={onClick}
          >
             <FiArrowLeft/>
          </div>
        );
      };

  return (
   <Container className={"my-6 md:my-32"}>
    <Heading title={"New Arrivals"} className={"mb-5 md:mb-12"}/>

    {/* <div className='md:gap-x-5 sm:flex sm:max-md:justify-between sm:max-lg:flex-wrap'> */}
    <Slider {...settings} className='flex'>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p1} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p2} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p3} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p4} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p5} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
        <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
            <Product productsSrc={p6} badge={true} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
    </Slider>
    {/* </div> */}

   </Container>
  )
}

export default Newarraival