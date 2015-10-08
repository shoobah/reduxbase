import React, { PropTypes } from 'react'

export default ({content}) => (
  <ul>
    {content.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
)
