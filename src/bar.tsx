/// <reference path="../typings/redux/redux.d.ts" />
//Skapar en div som är value bred med slumpad färg
import * as React from 'react'

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
    <rect x={40} y={10*index+10} width={value} height={8} style={style} />
  )
}