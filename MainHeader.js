import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

function MainHeader() {
  return (
    <div style = {{display : "flex", justifyContent : "space-between", padding : "10px"}} >
      <div> Cables</div>
      <div style={{display : "flex", columnGap : "20px", flexDirection : "row"}} >
        <div >
          <span>Task Attempt 2</span>
          <span> <NotificationsNoneIcon /> Calculated</span>
          <span> <CheckIcon /> Published</span>
        </div>
        <div>
          <span><NotificationsNoneIcon /></span>
          <span> <CloseIcon />  </span>
        </div>
      </div>
    </div>
  )
}

export default MainHeader