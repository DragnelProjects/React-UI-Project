import React from 'react'
import Cards from './Cards'

function Bttom(props) {
  return (
    <div className='bg-yellow-50 h-[50vh] w-[80vw] relative flex items-center  flex-nowrap overflow-hidden gap-5 perspective-distant'>
      <div className='absolute h-[60%] w-full bg-emerald-600 rounded-t-3xl bottom-0 overflow-hidden '>
        <div className='bg-emerald-300 absolute h-60 w-10 rotate-40 bottom-2.5 z-10 left-10 opacity-40'></div>
        <div className='bg-emerald-300 absolute h-75 w-15 rotate-40 -bottom-13.75 z-10 left-40 opacity-20'></div>
        <div className='bg-emerald-300 absolute h-75 w-15 rotate-40 -bottom-13.75 z-10 left-80 opacity-40'></div>
        <div className='bg-emerald-300 absolute h-75 w-15 rotate-40 -bottom-13.75 z-10 left-120 opacity-20'></div>
        <div className='bg-emerald-300 absolute h-75 w-15 rotate-40 -bottom-13.75 z-10 left-160 opacity-40'></div>
        <div className='bg-emerald-300 absolute h-75 w-15 rotate-40 -bottom-13.75 z-10 left-200 opacity-20'></div>
         <div className='bg-emerald-300 absolute h-75 w-15 rotate-40 -bottom-13.75 z-10 left-240 opacity-40'></div>
        </div>      
      {props.studentReviews.map((reviews, idx)=>{
        return <div className=' h-[90%]  p-1 z-20' key={idx}><Cards students={reviews.students} reviews={reviews.review} picture={reviews.profilePic}/></div>
      })}
    </div>
  )
}

export default Bttom