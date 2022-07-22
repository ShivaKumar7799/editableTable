import React from 'react'
import InputIcon from '@mui/icons-material/Input';

function InputHeader() {
  return (
    <div style={{display : "flex", justifyContent: "space-between", padding : "10px"}} >
      <div>
            <InputIcon /> <span>Input and Search</span>
      </div>
      <div>
          <span> Data</span>
      </div>
    </div>
  )
}

export default InputHeader