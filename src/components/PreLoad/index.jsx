import React, { useEffect } from 'react'
import { StyledPreLoad } from './styled'
import img from "../../assets/img/BurguerKenzie.png"
import burguer from "../../assets/img/hambuguer.png"

const PreLoad = ({setPreloadState}) => {

  useEffect(() => {  
    setTimeout(() => {
      setPreloadState(false)
    }, 2000)
  }, [])

  return (
    <StyledPreLoad>
        <img className='burguerImg' src={burguer} alt="imagem do hamburguer"/>
        <img className='logoImg' src={img} alt="imagem da logo"/>
    </StyledPreLoad>
  )
}

export default PreLoad