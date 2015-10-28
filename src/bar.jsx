//Skapar en div som är value bred med slumpad färg
import React from 'react'

function getRandomValue () {
  return Math.round(Math.random() * 256)
}

function randomColor () {
  let r = getRandomValue()
  let g = getRandomValue()
  let b = getRandomValue()
  return 'rgba(' + r + ', ' + g + ', ' + b + ', 1' + ')'
}

export default ({value}) => {
  let style = {
    display: 'inline-block',
    backgroundColor: randomColor(),
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
