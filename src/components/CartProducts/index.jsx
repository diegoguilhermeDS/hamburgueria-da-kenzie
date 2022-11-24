import React from 'react'

const CartProducts = ({product}) => {
  const {name, category, id, img} = product

  return (
    <li id={id} key={id}>
        <div>
            <img src={img} alt={`imagem do ${name}`} />
            <div>
                <h4>{name}</h4>
                <span>{category}</span>
            </div>
        </div>
        <button>Remover</button>
    </li>
  )
}

export default CartProducts