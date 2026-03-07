import React from 'react'
import LeftText from './LeftText'
import LastText from './LastText'

function LeftSide() {
  return (
    <div className=' w-[60%] flex flex-col justify-center py-4 px-2 gap-4'>
        <p className='text-[10px] text-red-500 font-medium'><span className='text-[10px] font-medium text-white bg-red-500 px-2 py-1 rounded-full'>50% OFF</span> LEARN FROM TODAY</p>
        <LeftText/>
        <LastText/>
    </div>
  )
}

export default LeftSide