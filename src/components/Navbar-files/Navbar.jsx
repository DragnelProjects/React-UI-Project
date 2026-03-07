import React from 'react'
import RightSide from './RightSide'

function Navbar() {
  return (
    <div className='bg-gray-100 w-full flex items-center justify-between px-4 py-1 '>
        <div className='flex h-full w-1/10 items-center justify-center '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEUQItYmgbC9WhF6Qzs2VmjgZMpgCXxuMeg&s" className='h-8 w-8 object-cover rounded-full' />
            <h6 className='font-semibold'>Edumen</h6>
        </div>
        
        <RightSide/>
    </div>
  )
}

export default Navbar