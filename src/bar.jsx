//Skapar en div som är value bred med slumpad färg
import React from 'react'

export default ({value, color, index}) => {
  let style = {
    display: 'inline-block',
    fill: color,
    stroke: 'transparent',
    width: value + 'px',
    position: 'absolute',
    left: '100px'
  }
  return (
    <rect x={40} y={20*index+20} width={value} height={18} style={style} />
  )
}
