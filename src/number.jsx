import React from 'react'

export default ({value, index}) => (
      <text x={10} y={15*index+20} style={{fill:'#333', fontSize:'12px'}}>
        {value}
      </text>
    )
