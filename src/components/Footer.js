import React from 'react'
import footerLinks from '../data/footer_links'

function Footer() {
  return (
    <footer className=' bg-black flex text-white justify-center items-center h-12 px-3'>  
    {
      footerLinks.map((media, index) => {
        return <a key={index} href={media.link} target='_blank' className='mx-1 site-icons' rel='noreferrer'>
                {media.icon}
              </a>
      })
    }
    </footer>
  )
}

export default Footer