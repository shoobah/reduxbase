//Skapar en div som är value bred med slumpad färg
import React from 'react'

export default ({value, color, index}) => {
  return (
      <rect 
        x={40} 
        y={15*index+10} 
        width={value} 
        height={12} 
        stroke={'black'} 
        fill={'url(#Gradient2)'}
      />
  )
}
