import React from 'react'
import { ArrowRight } from 'lucide-react';
import { Play } from 'lucide-react';

function LastText() {
  return (
    <div className=' flex items-center mt-4 gap-2'>
        <button className='bg-green-500 text-[10px] text-neutral-100 font-semibold py-1.5 px-3 rounded-full flex items-center gap-0.5 '>Explore Courses <ArrowRight size={11} /></button>
        <span className='bg-orange-400 p-2 rounded-full'><Play color='white' fill='white' size={12}/></span>
        <span className='text-xs font-semibold underline decoration-1 decoration-mist-700'>Watch Demo</span>
    </div>
  )
}

export default LastText