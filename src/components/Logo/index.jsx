import React from 'react'
import imgLogo from "../../assets/img/BurguerKenzie.png"


const Logo = () => {
  console.log(imgLogo)
  return (
    <img src={imgLogo} alt="image_logo" className='logo'/>
  )
}

export default Logo