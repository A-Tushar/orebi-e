import React from 'react'

const ReuseHeading = (props) => {
    return (
      <props.as className={`${props.className}`}>
        {props.text}
        {props.children}
        </props.as>
    )
  }

export default ReuseHeading