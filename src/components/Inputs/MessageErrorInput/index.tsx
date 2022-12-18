import React from 'react'
import { StyledSmall } from './style'

interface iMessageErrorProps {
    children: React.ReactNode
}

const MessageError = ({children}: iMessageErrorProps) => {
  return (
    <StyledSmall>{children}</StyledSmall>
  )
}

export default MessageError