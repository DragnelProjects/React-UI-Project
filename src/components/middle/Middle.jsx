import React from 'react'
import LeftSide from './LeftSide'
import ImageBox from './ImageBox'

function Middle() {
  return (
    <div className='bg-amber-400 h-[80vh] w-[80vw] flex'>
        <LeftSide/>
        <ImageBox/>
    </div>
  )
}

export default Middle