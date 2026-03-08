import React from 'react'
import Middle from './middle/Middle'
import Bttom from './bottom/Bttom'

function Container(props) {
  return (
    <div className='h-full w-full flex flex-col items-center bg-yellow-50'>
      <Middle/>
      <Bttom studentReviews={props.studentReviews}/>
    </div>
  )
}

export default Container