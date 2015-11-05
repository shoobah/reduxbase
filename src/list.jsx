import React from 'react'
import Number from './number'
import Bar from './bar'

export default ({content}) => (
  <ul style={{listStyle:'none'}}>
    {content.map((item, index) => (
      <li key={index}>
        <Number value={item.value} /><Bar value={item.value} color={item.color} />
      </li>
    ))}
  </ul>
)
