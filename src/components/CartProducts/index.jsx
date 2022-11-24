import React from 'react'
import Button from '../Button'

const CartProducts = ({product, currentSale, setCurrentSale, index}) => {
  const {name, category, id, img} = product

  const handleRemoveToCart = (event) => {
    const filterProductRemove = currentSale.filter((prod, index) => {
      return index !== +event.target.id
    })
    setCurrentSale(filterProductRemove)
  }

  return (
    <li id={index}>
        <div>
            <img src={img} alt={`imagem do ${name}`} />
            <div>
                <h4>{name}</h4>
                <span>{category}</span>
            </div>
        </div>
        <Button id={index} handle={handleRemoveToCart}>Remover</Button>
    </li>
  )
}

export default CartProducts