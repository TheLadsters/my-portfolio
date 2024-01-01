import React from 'react'

function Card({ image, title, description }) {
  return (
      <div className='p-8 rounded-lg flex flex-col items-center border-4 hover:bg-gray-50 hover:cursor-pointer drop-shadow-lg'>
          <img src={image} className='w-20 experience-img' alt='programming experience' />
          <span className='mt-5 text-2xl font-bold'>{title}</span>
          <p className='mt-2 text-center text-sm font-light'>{description}</p>
      </div>
  )
}

export default Card