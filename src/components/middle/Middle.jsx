import React from 'react'
import LeftSide from './LeftSide'
import ImageBox from './ImageBox'

function Middle() {
  return (
    <div className='border border-amber-400 h-screen w-[80vw] flex p-2'>
        <LeftSide/>
        <ImageBox/>
    </div>
  )
}

export default Middle