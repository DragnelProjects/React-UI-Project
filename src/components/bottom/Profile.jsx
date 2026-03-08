import React from 'react'

function Profile(props) {
  return (
     <div className='h-[60%] w-full'>
        <img src={props.picture} className='h-full w-full object-cover rounded-lg' />
      </div>
  )
}

export default Profile