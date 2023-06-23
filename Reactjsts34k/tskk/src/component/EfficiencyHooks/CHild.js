import React, { memo } from 'react'

function CHild(props) {
    console.log("Child is called")
  return (
    <div>CHildfgd
        
    </div>
  )
}
export default memo(CHild)