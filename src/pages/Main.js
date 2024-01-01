import React from 'react'
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'

function Main() {
  return (
    <div>
      <div className='flex flex-col sm:flex-row p-4 sm:p-8 sm:gap-5'>
        <div className='my-5 lg:w-11/12 lg:p-3'>
              <div className='max-w-3xl mb-5'>
                <p className='font-bold text-xl lg:text-2xl xl:text-3xl fadeLeft'>Hello, My name is</p>
                <p className='font-bold text-2xl lg:text-3xl ml-14 xl:text-4xl xl:ml-24 fadeLeft'>Jerald Blaise.</p>
                <p className='font-bold text-3xl min-[375px]:ml-24 
                              min-[320px]:ml-20 lg:text-4xl xl:text-6xl 
                              xl:ml-36 fadeLeft'> 
                  I am a Web
                </p>
                <p className='font-bold text-4xl min-[375px]:ml-40 min-[320px]:ml-20 lg:text-5xl xl:text-7xl xl:ml-72 fadeLeft'>Developer.</p>
              </div>

              <div className='max-w-2xl'>
                <p className='text-center lg:text-xl xl:text-3xl fadeLeft'>
                  I am a developer currently residing in the Philippines. I am a dreamer, hard-worker, and flexible person.
                  I always use my full potential when going through different projects. I believe that communication is key
                  and it is also the best asset towards making relationships last. 
                </p>
              </div>
        </div>

        <div className='fadeRight'>
            <img src='images\me.jpg' alt='Jerald' className='rounded-xl' />
        </div>
      </div>

      <section id="experience-section">
      <Experiences />
      </section>

      <section id="project-section">
        <Projects />
      </section>
      
      <section id="contact-section">
        <Contact />
      </section>
      
    </div>

  )
}

export default Main