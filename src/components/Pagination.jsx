import React from 'react'
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14.1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
    return (
      <div className="Items md:flex md:flex-wrap md:justify-between">
      {currentItems && currentItems.map((item) => (
        <div className='md:w-[32%]'>
           <Product productsSrc={p1} badge={false} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
           <Product productsSrc={p2} badge={false} badgetitle={"New"} brandname={"Black"} productTitle={"Basic Crew Neck Tee"} price={"$44.00"}/>
        </div>
      ))}
        </div>
    );
  }
  

  const Pagination = ({ itemsPerPage }) => {
   
    const [itemOffset, setItemOffset] = useState(0);
    const [itemSelected, setItemSelected] = useState(0);
  
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemSelected(event.selected)
      setItemOffset(newOffset);
    };
  
    return (
        <>
         <div>
         <Items currentItems={currentItems} />
         </div>
         
          <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel=""
          pageClassName="page-item"
          pageLinkClassName="inline-block border border-solid border-[#F0F0F0] py-2 px-3.5 font-dms font-normal text-sm " 
          previousClassName="hidden"
          nextClassName="hidden"
          breakLabel="..."
          breakClassName="flex items-end"
          breakLinkClassName="page-link"
          containerClassName="flex flex-wrap gap-y-2.5 md:gap-y-0 gap-x-3.5 mt-12"
          activeClassName="active inline-block border border-solid border-[#F0F0F0] font-dms font-normal text-sm bg-black text-white"
          renderOnZeroPageCount={null}
          />
          <p className='md:max-md:absolute xl:absolute md:bottom-0 md:right-0 mt-2.5 md:mt-0 font-normal font-dms text-sm text-t-color'>Products from  {itemOffset+1} to { itemOffset + itemsPerPage} of {items.length}</p>
        </>
      );
  };
  
  export default Pagination;
