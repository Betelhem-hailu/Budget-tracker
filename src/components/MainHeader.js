import React from 'react'
import { Header } from 'semantic-ui-react'

function MainHeader({title, type='h1'}) {
  return (
    <Header type={type}>{title}</Header>
  )
}

export default MainHeader