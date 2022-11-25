import React from 'react'
import Button from "../Button"

const InputSearch = ({ setFilteredProducts, products }) => {
  
  const handleSearch = (event) => {
    const search = event.target.value
    const filterProducts = products.filter((product) => product.name.toLowerCase().includes(search))
    setFilteredProducts(filterProducts)
  }

  return (
    <div className='inputSearch'>
        <input type="text" onChange={handleSearch}/>
        <Button children={"Pesquisar"}/>
    </div>
  )
}

export default InputSearch