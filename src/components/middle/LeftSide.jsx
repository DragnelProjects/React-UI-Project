import React from 'react'
import LeftText from './LeftText'
import LastText from './LastText'

function LeftSide() {
  return (
    <div className='bg-amber-200 w-[60%]'>
        <p><span>50% OFF</span> LEARN FROM TODAY</p>
        <LeftText/>
        <LastText/>
    </div>
  )
}

export default LeftSide