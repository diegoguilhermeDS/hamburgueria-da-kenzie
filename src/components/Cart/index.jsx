import React from 'react'
import CartEmpty from '../CartEmpty'
import CartProducts from '../CartProducts'
import CartTotal from '../CartTotal'

const Cart = ({currentSale}) => {
  return (
    <aside>
        <section>
            <h3>Carrinho de compras</h3>
        </section>
        <section>
            <ul>
                {currentSale.length > 0 ? currentSale.map((product) => <CartProducts product={product}/>) : <CartEmpty/>}
                {currentSale.length > 0 && <CartTotal currentSale={currentSale}/>}  
            </ul>
        </section>
    </aside>
  )
}

export default Cart