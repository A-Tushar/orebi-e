import React from 'react'
import Ulist from './Ulist'

const FooterItems = ({tagname,children}) => {
  return (
   <>
   <h4 className="mb-4 font-dms text-base font-bold">{tagname}</h4>
        <Ulist className={"font-normal mt-[6px] font-dms text-sm text-[#6D6D6D]"}>
                    {children}
            </Ulist>
   </>
  )
}

export default FooterItems