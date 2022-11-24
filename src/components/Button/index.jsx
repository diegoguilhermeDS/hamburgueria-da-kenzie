import React from 'react'

const Button = ({children, handle, id}) => {
  return (
    <button id={id} onClick={handle}>{children}</button>
  )
}

export default Button