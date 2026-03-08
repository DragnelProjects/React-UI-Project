import React from 'react'
import Section1 from './components/Section1'

function App() {

  const studentReviews = [
  {
    profilePic: "https://plus.unsplash.com/premium_photo-1682096497615-b251f42f84fe?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Financial security through smart thinking",
    academyCapLogo: "/images/cap-logo.png",
    students: "79 students"
  },
  {
    profilePic: "https://plus.unsplash.com/premium_photo-1682096801468-f453463ea948?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Learning to write like professionals",
    academyCapLogo: "/images/cap-logo.png",
    students: "50 students"
  },
  {
    profilePic: "https://plus.unsplash.com/premium_photo-1682096410067-6073d1f558fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Practical skills for real careers",
    academyCapLogo: "/images/cap-logo.png",
    students: "64 students"
  },
  {
    profilePic: "https://plus.unsplash.com/premium_photo-1683133979652-a8f78aeef249?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Confidence in public speaking",
    academyCapLogo: "/images/cap-logo.png",
    students: "92 students"
  },
  {
    profilePic: "https://plus.unsplash.com/premium_photo-1681486923517-547637b660a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Mastering creative problem solving",
    academyCapLogo: "/images/cap-logo.png",
    students: "58 students"
  },
  {
    profilePic: "https://plus.unsplash.com/premium_photo-1661749284031-53cdafc0f219?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Building strong leadership mindset",
    academyCapLogo: "/images/cap-logo.png",
    students: "73 students"
  },
  {
    profilePic: "https://plus.unsplash.com/premium_photo-1682096472408-0058dd138e56?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Developing modern business thinking",
    academyCapLogo: "/images/cap-logo.png",
    students: "41 students"
  },
  {
    profilePic: "https://plus.unsplash.com/premium_photo-1682090332476-07eedbfab105?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Improving communication and confidence",
    academyCapLogo: "/images/cap-logo.png",
    students: "67 students"
  },
  {
    profilePic: "https://plus.unsplash.com/premium_photo-1683121394387-bb152b9d3d45?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "From beginner to confident learner",
    academyCapLogo: "/images/cap-logo.png",
    students: "84 students"
  },
  {
    profilePic: "https://plus.unsplash.com/premium_photo-1661490188943-5b56c7360383?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review: "Clear guidance for career growth",
    academyCapLogo: "/images/cap-logo.png",
    students: "55 students"
  }
];

  return (
    <div className='h-full w-full flex bg-yellow-50 overflow-hidden'>
      <Section1 studentReviews={studentReviews} />
    </div>
  )
}

export default App