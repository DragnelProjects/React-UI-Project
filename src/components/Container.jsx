import React from 'react'
import Middle from './middle/Middle'
import Bttom from './bottom/Bttom'

function Container() {
  return (
    <div className='h-full flex flex-col items-center bg-blue-300'>
      <Middle/>
      <Bttom/>
    </div>
  )
}

export default Container