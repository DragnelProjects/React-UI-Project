import React from 'react'
import { Search } from 'lucide-react';
import { ShoppingBasket } from 'lucide-react';
import Tabs from './Tabs';

function RightSide() {
  return (
    <div className='flex w-[60%] justify-around items-center gap-2 '>
        <Tabs/>
        <Search size={14} />
        <ShoppingBasket size={14} />
        <button className='bg-amber-400 text-amber-50 text-xs font-medium px-4 py-2 rounded-full'>Login/Register</button>
    </div>
  )
}

export default RightSide