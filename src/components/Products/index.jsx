import React from "react"
import Button from "../Button"

const Products = ({product}) => {
  const {name, category, price, id, img} = product
  return (
    <li>
        <img src={img} alt={`imagem do ${name}`} />
        <div>
            <h3>{name}</h3>
            <small>{category}</small>
            <span>{`R$ ${price.toFixed(2).replace(".",",")}`}</span>
            <Button children={"Adicionar"}/>
        </div>
    </li>
  )
}

export default Products