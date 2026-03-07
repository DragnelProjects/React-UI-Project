import React from 'react'
import pic from './images/person.png'


function ImageBox() {
  return (
    <div className='h-full w-[40%] flex items-center justify-center py-2 '>
        <img src={pic} className='h-full w-full object-contain'/>
    </div>
  )
}

export default ImageBox