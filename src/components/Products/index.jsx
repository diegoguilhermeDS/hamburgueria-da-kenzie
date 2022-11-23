import React from 'react'
import Button from "../Button"

const Products = () => {
  return (
    <li>
        <img src="" alt="imagem do produto" />
        <div>
            <h3>Hamburguer</h3>
            <small>Sanduíches</small>
            <span>R$ 14.00</span>
            <Button children={"Adicionar"}/>
        </div>
    </li>
  )
}

export default Products