import React from 'react'
import Products from '../Products'

const ProductsList = ({products, currentSale, setCurrentSale}) => {
  return (
    <ul>
        {products.map((product) => <Products product={product} products={products} currentSale={currentSale} setCurrentSale={setCurrentSale}/>)}
    </ul>
  )
}

export default ProductsList