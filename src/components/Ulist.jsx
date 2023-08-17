import React from 'react'

const Ulist = ({children,className}) => {
  return (
    <ul className={`${className}`}>{children}</ul>
  )
}

export default Ulist