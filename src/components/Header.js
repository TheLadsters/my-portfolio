import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='bg-black text-white px-2 sm:flex sm:justify-between'>

      <div className='flex justify-between items-center px-3 py-4'>
        <div className='hover:cursor-pointer'>
          <span className='mx-1'>
            <b className='text-lg'>J</b>erald
          </span> 

          <span className='mx-1'>
            <b className='text-lg'>B</b>laise
          </span> 

          <span className='mx-1'>
            <b className='text-lg'>M</b>agsipoc
          </span>
        </div>

        <div className='sm:hidden'>
            <button className='hover:cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <CloseIcon className='site-icons' /> : <MenuIcon className='site-icons' />}
            </button> 
        </div>
      </div>


      <div className={isOpen ? 'block pb-3 sm:block' : 'hidden sm:block'}>
        <button onClick={() => handleLinkClick("about-section")} className='a-style'>About</button>
        <button onClick={() => handleLinkClick("experience-section")} className='a-style'>Experiences</button>
        <button onClick={() => handleLinkClick("project-section")} className='a-style'>Projects</button>
        <button onClick={() => handleLinkClick("contact-section")} className='a-style'>Contact</button>
      </div>
    </header>
  )
}

export default Header