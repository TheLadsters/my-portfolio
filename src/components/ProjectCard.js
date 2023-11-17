import React from 'react'

function ProjectCard({gif, title, description, link}) {
  return (
    <div className='p-6 sm:p-10 flex sm:flex-row sm:columns-2 flex-col items-center gap-5 border-4 w-full'>
      <div className='flex flex-col bg-red-400 h-full'>
        <img src={gif} className='sm:w-[600px] sm:h-full h-[200px] w-full drop-shadow-2xl' alt='project' />
      </div>

    <div className='flex flex-col sm:w-1/2 text-center gap-5'>
      <span className='text-3xl font-bold'>{title}</span>
        <p className='text-center font-light'>
            {description}
        </p>

        <span>
            <b>Project Link:</b>
            <a href={link} target='_blank' className='ml-2' rel='noreferrer'>
              <u>{link}</u>
            </a>
        </span>
    </div>

    </div>
  )
}

export default ProjectCard