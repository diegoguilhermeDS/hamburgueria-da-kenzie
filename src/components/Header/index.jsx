import React from 'react'
import InputSearch from '../InputSearch'
import Logo from '../Logo'


const Header = () => {
  return (
    <header className='header'>
        <Logo/>
        <InputSearch/>
    </header>
  )
}

export default Header