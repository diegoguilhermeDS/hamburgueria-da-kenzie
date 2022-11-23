import React from 'react'
import Button from '../Button'

const CartTotal = () => {
  return (
    <section>
        <div>
            <span>Total</span>
            <span>R$ 40,00</span>
        </div>
        <Button children={"Remover todos"}/>
    </section>
  )
}

export default CartTotal