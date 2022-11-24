import React from 'react'
import Button from '../Button'

const CartTotal = ({currentSale}) => {
  const valueTotal = currentSale.reduce((oldValue, currencyValue) => oldValue + currencyValue.price, 0)

  return (
    <section>
        <div>
            <span>Total</span>
            <span>R$ {valueTotal.toFixed(2).replace(".",",")}</span>
        </div>
        <Button children={"Remover todos"}/>
    </section>
  )
}

export default CartTotal