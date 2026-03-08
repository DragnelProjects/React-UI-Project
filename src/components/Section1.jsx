import React from 'react'
import Navbar from './Navbar-files/Navbar'
import Container from './Container'

function Section1(props) {
  return (
    <div className="min-h-screen w-full flex flex-col">
        <Navbar/>
        <Container studentReviews={props.studentReviews}/>
    </div>
  )
}

export default Section1