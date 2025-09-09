import React from 'react'

const Card = ({children, className=""}) => {
  return (
    <div className={`bg-white shadow rounded-2xl border ${className}`}>
      {children}
    </div>
  )
}

export default Card