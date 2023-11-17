import React from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <div className='flex flex-col justify-start items-center px-5 my-7'>
      <span className='title-text'>
        PROJECTS
      </span>

      <div className='flex flex-col gap-5'>
        {projects.map((proj, index) => {
          return <ProjectCard {...proj} key={index} />
        })
        }
      </div>
  </div>
  )
}

export default Projects