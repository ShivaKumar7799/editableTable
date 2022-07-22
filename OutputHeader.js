import React from 'react'
import InputIcon from '@mui/icons-material/Input';

function OutputHeader() {
  return (
    <div style={{display : "flex", justifyContent: "space-between", padding : "10px"}} >
      <div>
      <InputIcon /> Output and Search 
      </div>
      <div>
        <span> Data </span>
        <span> Plots </span>
        <span> Files </span>
        <span> Logs </span>
      </div>
    </div>
  )
}

export default OutputHeader