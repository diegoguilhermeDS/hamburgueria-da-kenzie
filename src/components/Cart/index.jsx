import React from 'react'
import CartProducts from '../CartProducts'
import CartTotal from '../CartTotal'

const Cart = () => {
  return (
    <aside>
        <section>
            <h3>Carrinho de compras</h3>
        </section>
        <section>
            <ul>
                <CartProducts/>
                <CartProducts/>
                <CartProducts/>
            </ul>
        </section>
        <CartTotal/>
    </aside>
  )
}

export default Cart