import React from 'react'
import Sidebarcontent from './Sidebarcontent'
import  {Catagory, color, brands, prices} from '../Data/Data'

const LeftPartshop = () => {
  return (
  <>
  <Sidebarcontent 
      title={"Shop by Category"}
      dropdown={false}
      data={Catagory} 
      
      />

  <Sidebarcontent 
      title={"Shop by Color"} 
      dropdown={true} 
      data={color}
      />
  <Sidebarcontent
     title={"Shop by Brand"}
     dropdown={true} 
     data={brands}
     color={false}
     />
  <Sidebarcontent
     title={"Shop by Price"}
     dropdown={false} 
     data={prices}
     color={false}
     />




  {/* 
  
  <Sidebarcontent title={"Shop by Price"} dropdown={false} /> */}
  </>
  )
}

export default LeftPartshop