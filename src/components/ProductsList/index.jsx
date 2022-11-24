import React from 'react'
import Products from '../Products'

const ProductsList = ({products}) => {
  return (
    <ul>
        {products.map((product) => <Products product={product}/>)}
    </ul>
  )
}

export default ProductsList