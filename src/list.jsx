import React from 'react'
import Number from './number'
import Bar from './bar'

export default ({content}) => (
  <svg width={1000} height={500} viewBox={'0 0 1000 500'} style={{fill:'#cccccc'}}>
    <defs>
      <linearGradient id={'Gradient2'} x1={'0'} y1={'0'} x2={'1'} y2={'0'}>
        <stop offset={'0%'} stopColor={'#00ff77'}/>
        <stop offset={'100%'} stopColor={'#005511'}/>
      </linearGradient>
    </defs>
    {content.map((item, index) => (
      <svg key={'row' + index}><Number value={item.value} index={index} /><Bar value={item.value} color={item.color} index={index}/></svg>
    ))}
  </svg>
)
