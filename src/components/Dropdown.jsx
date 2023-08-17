import React from 'react'

const Dropdown = ({children, className, title,dropref}) => {
  return (
    <div className={className} ref={dropref}>
        {title}
        {children}
    </div>
  )
}

export default Dropdown