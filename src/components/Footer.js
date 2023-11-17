import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer className=' bg-black flex text-white justify-center items-center h-12 px-3'>  
      <a href='https://www.facebook.com/shkamberblaise/' target='_blank' rel='noreferrer'>
        <FacebookIcon className='mx-1 site-icons' />
      </a>

      <a href='https://www.instagram.com/itsyaboiblaise/' target='_blank' rel='noreferrer'>
        <InstagramIcon className='mx-1 site-icons' />
      </a>

      <a href='https://www.linkedin.com/in/jerald-blaise-magsipoc-b0800027b/' target='_blank' rel='noreferrer'>
        <LinkedInIcon className='mx-1 site-icons' />
      </a>

      <a href='https://github.com/jeraldblaisemagsipoc' target='_blank' rel='noreferrer'>
        <GitHubIcon className='mx-1 site-icons' />
      </a>

    </footer>
  )
}

export default Footer