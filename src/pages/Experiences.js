import React from 'react'
import experiences from '../data/experience'
import Card from '../components/Card'

function Experiences() {
  return (
    <div className='flex flex-col justify-start items-center min-h-screen my-10 mx-5'>
        <span className='title-text'>
          PROGRAMMING EXPERIENCE
        </span>

        <div className='grid sm:grid-cols-3 gap-4 xs:grid-cols-1'>
          {experiences.map((exp, index) => {
            return <Card {...exp} key={index} /> 
          })}
        </div>
    </div>
  )
}

export default Experiences