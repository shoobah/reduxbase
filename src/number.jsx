import React from 'react'

export default ({value, index}) => (
      <text x={20} y={20*index+27} style={{fill:'#333', fontSize:'8px'}}>
        {value}
      </text>
    )
