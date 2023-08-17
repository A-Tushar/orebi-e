import React from 'react'
import { Link } from 'react-router-dom'

const List = ({children,className,href}) => {
  return (
    
    <li className={className}>
      <Link to={href}>
        {children}
      </Link>
    </li>
  )
}

export default List