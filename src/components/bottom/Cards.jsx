import React from 'react'
import Profile from './Profile';
import Rating from './Rating';

function Cards(props) {
  return (
    <div className='bg-neutral-50 h-full w-50 flex flex-col justify-between rounded-2xl overflow-hidden py-3 px-3 z-10 animate-slide-show'>
     <Profile picture={props.picture}/>
      <div className=' p-1'>
        <p className='text-[12px] tracking-wider font-semibold '>{props.reviews}</p>
      </div>
      <Rating students={props.students}/>
    </div>
  )
}

export default Cards