import React from 'react'
import Number from './number'

export default ({content}) => (
  <ul style={{listStyle:'none'}}>
    {content.map((item, index) => (
      <li key={index}>
        <Number value={item} />
      </li>
    ))}
  </ul>
)
