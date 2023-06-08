import React from 'react'

const Button = (props) => {
  return (
      <button className={`py-2 px-6 text-black bg-[#00bec9] ${props.bor} ${props.borRad}`}>{props.text}</button>
  )
}

export default Button
