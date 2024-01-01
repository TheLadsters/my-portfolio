import React from 'react';
import projects from '../data/projects';

function Projects() {
  return (
    <div className='flex flex-col justify-start items-center px-5 gap-3'>
      <span className='title-text mt-5'>PROJECTS</span>

      {/* Project 1 */}
      <div className='p-6 sm:p-10 flex flex-col items-center gap-5 border-4 w-full'>
        <span className='text-3xl text-center font-bold'>{projects[0].title}</span>

        <div className='flex flex-col sm:flex-row gap-5'>
          <div className='flex flex-col h-full'>
            <img
              src={projects[0].gif}
              className='sm:w-[600px] w-full drop-shadow-2xl'
              alt='project'
            />
          </div>

          <div className='flex flex-col justify-center sm:w-1/2 text-center gap-5'>
            <p className='text-center font-light'>
              {projects[0].description}
            </p>

            <div className='flex flex-col justify-center w-full'>
              <b>Project Link:</b>
              <a
                href={projects[0].link}
                target='_blank'
                className='ml-2'
                rel='noreferrer'
              >
                <u>{projects[0].link}</u>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
    <div className='p-3 sm:p-10 flex flex-col items-center gap-5 border-4 w-full'>
      <div className='flex flex-col text-center'>
        <span className='text-3xl font-bold'>{projects[1].title}</span>
      </div>

      <div className='flex flex-col sm:flex-row gap-5'>
        <div className='flex flex-col gap-4 items-center'>
          <div className='flex flex-col h-full'>
            <img
              src={projects[1].gif}
              className='w-5/12 drop-shadow-2xl mx-auto'
              alt='project'
            />
          </div>
        </div>

        <div className='flex flex-col justify-center sm:w-2/3 text-center gap-5'>
          <p className='text-center font-light'>
            {projects[1].description}
          </p>

          <div className='flex flex-col justify-center w-full'>
            <b>Project Link:</b>
            <div className='w-[260px] sm:w-full overflow-hidden whitespace-nowrap'>
              <a
                href={projects[1].link}
                target='_blank'
                rel='noreferrer'
                className='block text-ellipsis text-center sm:w-full'
              >
                <u>{projects[1].link}</u>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Projects;
