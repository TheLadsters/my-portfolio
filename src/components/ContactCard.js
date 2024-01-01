import React from 'react'

function ContactCard({ link, icon, name, social }) {
  return (
      <div className='p-8 rounded-lg flex flex-col h-full items-center border-4 hover:bg-gray-50 hover:cursor-pointer drop-shadow-lg'>  
        <a href={link} className='max-w-full flex flex-col text-center' target='_blank' rel='noreferrer'>
        <div className='contact-icons'>
          {icon}
        </div>

        <div>
            <p className='mt-5 text-sm font-bold'>{social}</p>
          <p className='mt-2 text-center text-sm font-light'>{name}</p>
        </div>
        </a>

      </div>
  )
}

export default ContactCard