import React from 'react'
import Button from '../Button'

const CartTotal = ({currentSale, setCurrentSale}) => {
  const valueTotal = currentSale.reduce((oldValue, currencyValue) => oldValue + currencyValue.price, 0)

  const handleRemoveAllToCart = () => {
    setCurrentSale([])
  }

  return (
    <section>
        <div>
            <span>Total</span>
            <span>R$ {valueTotal.toFixed(2).replace(".",",")}</span>
        </div>
        <Button children={"Remover todos"} handle={handleRemoveAllToCart}/>
    </section>
  )
}

export default CartTotal