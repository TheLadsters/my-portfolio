import React from 'react'
import contacts from '../data/contacts'
import ContactCard from '../components/ContactCard'

function Contact() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <span className='title-text mt-8'>
        Got Any Questions?
      </span>

      <span className='font-light'>Feel free to contact me and get in touch.</span>

      <div className='grid grid-cols-2 gap-4 p-5'>
            {contacts.map((contact, index) => {
              return <ContactCard {...contact} key={index} /> 
            })}
      </div>
  </div>
  )
}

export default Contact