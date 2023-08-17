import React, { useState } from 'react'
import Image from './Image';
import bnr1 from "../assets/banner.png"
import bnr2 from "../assets/banner2.png"
import bnr3 from "../assets/banner3.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const Banner = () => {
    let [dotaAtive,setDotActive]=useState(0);
    const settings = {
        beforeChange: (prev,next) => {
            setDotActive(next);
        },
        dots: true,
        arrows: false,
        infinite: true,
        autoplay:true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
                
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
            style={
                i=== dotaAtive ?
                { position:"absolute",
                bottom:"30px",
                left:"50%",
                display:"inline-block",
                width: "30px",
                paddingX:"10px",
                color: "black",
                borderTop: "5px black solid",
                fontSize:"10px",}
                :{ position:"absolute",
                bottom:"30px",
                left:"50%",
                display:"inline-block",
                width: "30px",
                paddingX:"10px",
                color: "transparent",
                borderTop: "5px white solid",
                fontSize:"10px",}
            }
            >
              0{i + 1}
            </div>
          ),
          responsive: [
            {
              breakpoint: 576,
              settings: {
                
                dots: false,
              }
            }
          ],
      }


  return (
   <>
    <div>
        <Slider {...settings}>
        <Link to='#'>
            <div>
                <Image src={bnr1}/>
            </div>
        </Link>
        <Link to='#'>
            <div>
                <Image src={bnr2}/>
            </div>
        </Link>
        <Link to='#'>
            <div>
                <Image src={bnr3}/>
            </div>
        </Link>
        </Slider>
      </div>
   </>
  )
}

export default Banner