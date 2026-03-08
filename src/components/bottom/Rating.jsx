import React from 'react'
import { GraduationCap } from 'lucide-react';
import { Star } from 'lucide-react';

function Rating(props) {
  return (
     <div className='flex items-center justify-between pr-3'>
         <h5 className='flex items-center text-[10px] font-semibold text-neutral-600 gap-1'><GraduationCap color='orange' size={16} />{props.students}</h5>
         <div className='flex items-center gap-1'>
           <Star size={8} fill='orange' color='orange' />
           <Star size={8} fill='orange' color='orange' />
           <Star size={8} fill='orange' color='orange' />
           <Star size={8} fill='orange' color='orange' />
           <Star size={8} fill='orange' color='orange' />
         </div>
      </div>
  )
}

export default Rating