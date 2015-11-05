//Skapar en div som är value bred med slumpad färg
import React from 'react'

export default ({value, color}) => {
  let style = {
    display: 'inline-block',
    backgroundColor: color,
    width: value + 'px',
    position: 'absolute',
    left: '100px'
  }
  return (
  <div style={style}>
      &nbsp;
    </div>
  )
}
