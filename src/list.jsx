import React from 'react'
import Number from './number'
import Bar from './bar'

export default ({content}) => (
  <svg width={1000} height={500} style={{fill:'#eeeeee'}}>
    {content.map((item, index) => (
      <svg><Number value={item.value} index={index} /><Bar value={item.value} color={item.color} index={index}/></svg>
    ))}
  </svg>
)
