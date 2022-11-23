import React from 'react'
import "./styles.css"
import Button from "../Button"

const InputSearch = () => {
  return (
    <div className='inputSearch'>
        <input type="text" />
        <Button children={"Pesquisar"}/>
    </div>
  )
}

export default InputSearch